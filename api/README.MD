# Propuesta de Backend para proyecto final de Henry

## Recuerde ejecutar ``` npm install ``` para reconstruir los paquetes de node, ademas es importante leer el archivo .example.env para declarar las variables de entorno que necesita esta aplicacion.

## Funcionalidad basica del Backend

1) Permite crear usuarios, eliminarlos, actualizarlos y listarlos. 
2) Hacer un login basico con email y password, y revalidar el token

## Para hacer pruebas en postman:
De momento solo se tienen dos rutas
   - ```http://localhost:8080/api/users``` => Esta ruta maneja toda la parte de los usuarios, (CRUD)
   - ```http://localhost:8080/api/auth``` => Esta ruta maneja toda la parte de autenticacion