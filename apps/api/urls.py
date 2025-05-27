from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, NotificacionViewSet, AtencionPoblacionViewSet, Login, Logout, Register, TokenValidationView, PasswordResetRequestView

# Crear un enrutador y registrar los viewsets
router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)
router.register(r'notificaciones', NotificacionViewSet)
router.register(r'atencion_poblacion', AtencionPoblacionViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Incluir las URLs del enrutador
    path('login/', Login.as_view(), name='login'),  # URL para iniciar sesión
    path('logout/', Logout.as_view(), name='logout'),  # URL para cerrar sesión
    path('register/', Register.as_view(), name='register'),  # URL para registro
    path('verify/<str:token>/', TokenValidationView.as_view(), name='token_validation'),  # URL para verificación de cuenta
    path('reset/<uidb64>/<token>/', PasswordResetRequestView.as_view(), name='password_reset'),  # URL para restablecimiento de contraseña
]