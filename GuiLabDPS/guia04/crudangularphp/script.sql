CREATE DATABASE IF NOT EXISTS `bd1`;
USE `bd1`;
CREATE TABLE articulos (
 codigo int AUTO_INCREMENT,
 descripcion varchar(50),
 precio float,
 PRIMARY KEY (codigo)
 )
