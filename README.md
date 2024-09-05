# TUho### Pasos para correr el proyecto y activar el entorno virtual

1. Clona el repositorio en tu máquina local:
    ```
    git clone https://github.com/tu-usuario/tu-proyecto.git
    ```

2. Navega al directorio del proyecto:
    ```
    cd tu-proyecto
    ```

3. Crea y activa el entorno virtual:
    ```
    python -m venv venv
    source venv/bin/activate
    ```

4. Instala las dependencias del proyecto:
    ```
    pip install -r requirements.txt
    ```

5. Inicializa el proyecto:
    ```
    python manage.py migrate
    python manage.py createsuperuser
    ```

6. Ejecuta el servidor local:
    ```
    python manage.py runserver
    ```

¡Listo! Ahora puedes acceder a tu proyecto en `http://localhost:8000`.

Recuerda que cada vez que quieras trabajar en el proyecto, debes activar el entorno virtual ejecutando `source venv/bin/activate` en el directorio del proyecto.