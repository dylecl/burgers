### Schema
DROP DATABASE IF EXISTS burger_db2;
CREATE DATABASE burger_db2;
USE burger_db2;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	type varchar(255) NOT NULL,
	swallowed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
