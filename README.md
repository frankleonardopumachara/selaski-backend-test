# Selaski backend test

Pasos para ejecutar el proyecto

1. Clonar el respositorio
2. Instalanar las dependencias usando el comando `npm install`
3. Crear un archivo `.env` en el directorio raiz, luego copiar y pegar las siguientes variables, esta configuracion trabaja para una base de datos local, cambiar las variables de acuerdo a su contexto:

* HOST=localhost
* PORT=3000
* DB_HOST=localhost
* DB_USER=root
* DB_PASSWORD=secreto
* DB_NAME=db-selaski
* DB_PORT=3306

4. Ejecutar la app  `npm run start:dev`


El proyecto se ejecuta en el puerto 3000 por defecto, si la app se ejecuto correctamente vera estos mensajes en consola:

`server running: http://localhost:3000`
`Database connection success`







