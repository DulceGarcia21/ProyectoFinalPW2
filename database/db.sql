DROP DATABASE IF EXISTS bicitaxis_db;
CREATE DATABASE IF NOT EXISTS bicitaxis_db;
USE bicitaxis_db;

CREATE TABLE usuarios(
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
correo VARCHAR(100) NOT NULL UNIQUE,
contraseña VARCHAR(255) NOT NULL,
rol ENUM('admin','usuario') DEFAULT 'usuario',
fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE conductores(
id_conductor INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
telefono VARCHAR(15),
licencia VARCHAR(50),
estado ENUM('activo','inactivo') DEFAULT 'activo'
);

CREATE TABLE bicitaxis(
matricula VARCHAR(5) PRIMARY KEY,
estado ENUM('disponible','fuera_servicio','mantenimiento','en_viaje') NOT NULL DEFAULT 'disponible',
descripcion TEXT,
id_conductor INT UNIQUE,
fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY(id_conductor) REFERENCES conductores(id_conductor)
ON DELETE SET NULL
);

CREATE TABLE mantenimientos(
id_mantenimiento INT AUTO_INCREMENT PRIMARY KEY,
matricula_bicitaxi VARCHAR(5) NOT NULL,
descripcion TEXT NOT NULL,
fecha_inicio DATE NOT NULL,
fecha_fin DATE,
costo DECIMAL(10,2),
estado ENUM('pendiente','en_proceso','terminado') DEFAULT 'pendiente',
FOREIGN KEY(matricula_bicitaxi) REFERENCES bicitaxis(matricula)
ON DELETE CASCADE
);

CREATE TABLE reportes(
id_reporte INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
matricula_bicitaxi VARCHAR(5) NOT NULL,
descripcion TEXT NOT NULL,
fecha_reporte TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
estado ENUM('nuevo','revisado','resuelto') DEFAULT 'nuevo',
FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario)
ON DELETE SET NULL,
FOREIGN KEY(matricula_bicitaxi) REFERENCES bicitaxis(matricula)
ON DELETE CASCADE
);

CREATE TABLE viajes(
id_viaje INT AUTO_INCREMENT PRIMARY KEY,
matricula_bicitaxi VARCHAR(5) NOT NULL,
fecha_salida DATETIME NOT NULL,
fecha_llegada DATETIME,
estado ENUM('en_viaje','finalizado') DEFAULT 'en_viaje',
observaciones TEXT,
FOREIGN KEY(matricula_bicitaxi) REFERENCES bicitaxis(matricula)
ON DELETE CASCADE
);

INSERT INTO usuarios(nombre,correo,contraseña,rol) VALUES
('Admin Principal','admin@gmail.com','123456','admin'),
('Usuario Prueba','usuario@gmail.com','123456','usuario');

INSERT INTO conductores(nombre,telefono,licencia,estado) VALUES
('Juan Pérez','5512345678','LIC001','activo'),
('Luis García','5598765432','LIC002','activo');

INSERT INTO bicitaxis(matricula,estado,descripcion,id_conductor) VALUES
('AB123','disponible','Bicitaxi en buen estado',1),
('CD456','mantenimiento','Revisión de frenos',2);

INSERT INTO mantenimientos(matricula_bicitaxi,descripcion,fecha_inicio,costo,estado) VALUES
('CD456','Cambio de frenos','2026-05-23',350.00,'en_proceso');

INSERT INTO reportes(id_usuario,matricula_bicitaxi,descripcion,estado) VALUES
(2,'CD456','El bicitaxi hace ruido al frenar','nuevo');

INSERT INTO viajes(matricula_bicitaxi,fecha_salida,estado,observaciones) VALUES
('AB123','2026-05-23 10:30:00','en_viaje','Salida desde la base');