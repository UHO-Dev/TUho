
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('plataforma.urls')),
    path('Usuarios/',include('usuarios.urls')),
    path('AtencionPoblacion/',include('atencion_poblacion.urls')),
    # Sección Notificaciones
    path('Notificaciones/',include('notificaciones.urls')),
    path('SecretariaDocente/', include('secretaria_docente.urls')),
    
    path('api/', include('api.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)