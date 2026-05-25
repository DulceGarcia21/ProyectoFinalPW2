# Sistema de Check de Bicitaxis

## Descripción del proyecto

El sistema de Check de Bicitaxis es una aplicación web desarrollada para administrar el control y monitoreo de bicitaxis, conductores, mantenimientos, reportes y viajes. El objetivo principal del sistema es facilitar la gestión de los bicitaxis mediante una interfaz administrativa y un sistema de usuarios con autenticación.

La aplicación fue desarrollada utilizando arquitectura MVC (Modelo - Vista - Controlador), permitiendo separar la lógica de negocio, las vistas y el acceso a datos para mantener un proyecto organizado y escalable.

---

# Tecnologías utilizadas

* Node.js
* Express.js
* MySQL
* EJS
* CSS
* Docker
* Docker Compose
* dotenv
* express-session

---

# Arquitectura MVC

El proyecto utiliza el patrón Modelo Vista Controlador (MVC).

## Modelos (Models)

Los modelos son responsables de interactuar con la base de datos MySQL mediante consultas SQL.

Ejemplos:

* bicitaxiModel.js
* conductorModel.js
* mantenimientoModel.js
* reporteModel.js

---

## Vistas (Views)

Las vistas fueron desarrolladas utilizando EJS y permiten mostrar la interfaz gráfica del sistema al usuario.

Ejemplos:

* login.ejs
* dashboard.ejs
* bicitaxis.ejs
* conductores.ejs
* mantenimientos.ejs
* reportes.ejs

---

## Controladores (Controllers)

Los controladores contienen la lógica principal de la aplicación y funcionan como intermediarios entre los modelos y las vistas.

Ejemplos:

* loginController.js
* bicitaxiController.js
* conductorController.js
* mantenimientoController.js
* reporteController.js

---

# Base de datos

La base de datos fue desarrollada en MySQL y contiene las siguientes tablas principales:

* usuarios
* conductores
* bicitaxis
* mantenimientos
* reportes
* viajes

Las relaciones entre tablas utilizan claves foráneas para mantener la integridad de los datos.

---

# Sistema de autenticación

El sistema cuenta con autenticación mediante sesiones utilizando express-session.

Existen dos tipos de usuario:

* Administrador
* Usuario normal

El administrador tiene acceso completo a las operaciones CRUD del sistema, mientras que el usuario normal únicamente puede acceder a ciertas funciones como reportes y visualización.

---

# Dockerización

La aplicación fue dockerizada utilizando Docker y Docker Compose.

Se utilizan dos contenedores:

* Contenedor Node.js para la aplicación web
* Contenedor MySQL para la base de datos

Esto permite ejecutar el proyecto de manera portable y sencilla en cualquier equipo que tenga Docker instalado.

---

# Variables de entorno

Las variables de entorno se manejan utilizando dotenv para proteger información sensible como contraseñas y configuración de la base de datos.

Archivo utilizado:

* .env

Ejemplo de variables:

* DB_HOST
* DB_USER
* DB_PASSWORD
* DB_NAME
* PORT

# Flujo general del sistema

## Inicio de sesión

1. El usuario accede a la pantalla de login.
2. El sistema valida las credenciales en la base de datos.
3. Si las credenciales son correctas:

   * se crea una sesión
   * se guarda el rol del usuario
   * se redirecciona al dashboard

---

# Dashboard

El dashboard funciona como menú principal del sistema y permite navegar entre los diferentes módulos:

* Bicitaxis
* Conductores
* Mantenimientos
* Reportes
* Viajes

---

# Gestión de bicitaxis

El administrador puede:

* Registrar nuevos bicitaxis
* Editar información
* Eliminar registros
* Asignar conductores

Los datos se almacenan en la tabla bicitaxis.

---

# Gestión de conductores

El sistema permite:

* Registrar conductores
* Actualizar información
* Eliminar conductores

Cada conductor puede estar asociado a un bicitaxi.

---

# Gestión de mantenimientos

El administrador puede registrar mantenimientos indicando:

* bicitaxi
* descripción
* fechas
* costo
* estado

Esto permite llevar control del estado mecánico de cada unidad.

---

# Gestión de reportes

Los usuarios pueden generar reportes relacionados con problemas o incidencias de los bicitaxis.

Los administradores pueden:

* revisar reportes
* actualizarlos
* eliminarlos

---

# Flujo de base de datos

1. El usuario interactúa con una vista EJS.
2. La información es enviada al controlador mediante rutas Express.
3. El controlador procesa la lógica.
4. El modelo ejecuta consultas SQL en MySQL.
5. La respuesta regresa a la vista y se muestra al usuario.

---

# Flujo con Docker

1. Docker Compose inicia los contenedores.
2. MySQL crea automáticamente la base de datos utilizando db.sql.
3. Node.js se conecta al contenedor MySQL.
4. La aplicación queda disponible en:

http://localhost:3000
