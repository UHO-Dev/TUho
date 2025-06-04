from rest_framework import viewsets

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import generics

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.models import Group

from django.conf import settings
from django.core.mail import send_mail
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes

import uuid

from .models import Area
from atencion_poblacion.models import AtencionPoblacion
from notificaciones.models import Notificacion
from notificaciones.models import Usuario
from usuarios.serializers import UsuarioSerializer
from notificaciones.serializers import NotificacionSerializer
from atencion_poblacion.serializers import AtencionPoblacionSerializer
from .serializers import AreaSerializer


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


class NotificacionViewSet(viewsets.ModelViewSet):
    queryset = Notificacion.objects.all()
    serializer_class = NotificacionSerializer

class AtencionPoblacionViewSet(viewsets.ModelViewSet):
    queryset = AtencionPoblacion.objects.all()
    serializer_class = AtencionPoblacionSerializer

class Login(APIView):
    
    
    def post(self, request):
        if request.user.is_authenticated:
            return Response({"message": "User already authenticated"}, status=status.HTTP_200_OK)

        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({"message": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user_to_auth = Usuario.objects.get(username=username)
        except Usuario.DoesNotExist:
            return Response({"response": "incorrecto", "message": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)

        user = authenticate(request, username=user_to_auth.username, password=password)
        if user is not None:
            login(request, user)
            usuario = Usuario.objects.get(id=user.id)
            user_info = {
                "id": usuario.id,
                "username": usuario.username,
                "email": usuario.email,  # Asegúrate de que el modelo Usuario tenga este campo
                "first_name": usuario.first_name,  # Asegúrate de que el modelo Usuario tenga este campo
                "last_name": usuario.last_name,  # Asegúrate de que el modelo Usuario tenga este campo
            }
            return Response({"user": user_info}, status=status.HTTP_200_OK)
        else:
            return Response({"response": "incorrecto", "message": "Account information is incorrect or not verified"}, status=status.HTTP_401_UNAUTHORIZED)
        
class Logout(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        if request.user.is_authenticated:
            logout(request)
            return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "User is not authenticated"}, status=status.HTTP_400_BAD_REQUEST)
        
        

class Register(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password1 = request.data.get('password1')
        password2 = request.data.get('password2')

        if Usuario.objects.filter(username=username).exists():
            return Response({"message": "Ya existe una cuenta con ese usuario."}, status=status.HTTP_400_BAD_REQUEST)

        if Usuario.objects.filter(email=email).exists():
            return Response({"message": "Ya existe una cuenta con ese email."}, status=status.HTTP_400_BAD_REQUEST)

        if password1 != password2:
            return Response({"message": "Las contraseñas deben coincidir."}, status=status.HTTP_400_BAD_REQUEST)

        usuario = Usuario(username=username, email=email, token_activacion=str(uuid.uuid4()), is_active=False)
        usuario.set_password(password1)

        try:
            usuario.save()
            usuario.groups.add(Group.objects.get(name="Usuario"))

            # Enviar correo de verificación
            subject = "Verificación de cuenta"
            message = f'Hola, acceda a este enlace para validar su cuenta: {settings.DOMAIN}/Usuarios/verify/{usuario.token_activacion}'
            recipient_list = [usuario.email]
            send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, recipient_list)

            return Response({"message": "Su cuenta ha sido creada con éxito, verifique su email para validar su cuenta."}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"message": "Algo salió mal realizando el registro, por favor intente de nuevo."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    
class TokenValidationView(APIView):
    def get(self, request, token):
        try:
            profile_obj = Usuario.objects.filter(token_activacion=token).first()
            if profile_obj:
                if profile_obj.is_active:
                    return Response({"message": "Su cuenta ya está verificada."}, status=status.HTTP_200_OK)
                profile_obj.is_active = True
                profile_obj.save()
                return Response({"message": "Su cuenta ha sido verificada."}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "No existe una cuenta con ese token o la verificación ha expirado."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"message": "Ha ocurrido un error, por favor intente de nuevo."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class PasswordResetRequestView(APIView):
    permission_classes = [IsAuthenticated] 
    
    def post(self, request):
        email = request.data.get('email')
        User = get_user_model()
        try:
            user = User.objects.get(email=email)
            # Generar token y enviar correo
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            # Enviar correo con el enlace para restablecer la contraseña
            subject = "Restablecimiento de contraseña"
            message = f'Acceda a este enlace para restablecer su contraseña: {settings.DOMAIN}/reset/{uid}/{token}/'
            send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [user.email])
            return Response({"message": "Se ha enviado un correo para restablecer la contraseña."}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"message": "No existe una cuenta con ese email."}, status=status.HTTP_400_BAD_REQUEST)

                            


class AreaCreateView(generics.ListCreateAPIView):
    queryset = Area.objects.all()
    serializer_class = AreaSerializer
    permission_classes = [IsAdminUser] 