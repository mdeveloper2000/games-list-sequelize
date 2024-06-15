# A website for information management about game trophies. Built with Node.js, Express, EJS, Bootstrap, MySQL and Sequelize ORM

Script for database and table

```
CREATE DATABASE trophies_db;
USE trophies_db;

CREATE TABLE games (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    multiplayer ENUM('YES','NO') NOT NULL DEFAULT 'NO',
    platinum ENUM('YES','NO') NOT NULL DEFAULT 'YES',
    details VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY(id),
    UNIQUE(title)
);
```
