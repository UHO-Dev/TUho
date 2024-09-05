# TUho### Pasos para correr el proyecto

1. Clona el repositorio en tu máquina local:
    ```
    git clone [Url del repositorio]
    ```

2. Navega al directorio del proyecto:
    ```
    cd [Nombre del repo]
    ```

3. Crea y activa el entorno virtual:
    Crear:
    ```
    python -m venv venv
    ```
 Activar:
    En windows:   
    ```    
    source venv/Scripts/activate.bat
    ```
    En Linux y Mac:
    ```

    ```
4. Instala las dependencias del proyecto:
    ```
    pip install -r requirements.txt
    ```

5. Inicializa el proyecto:
    ```
    python manage.py makemigrations
    python manage.py migrate
    python manage.py install
    ```

6. Ejecuta el servidor local:
    ```
    python manage.py runserver
    ```

¡Listo! Ahora puedes acceder a tu proyecto en `http://localhost:8000`.
