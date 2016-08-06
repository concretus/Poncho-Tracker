CREATE DATABASE poncho_db_test;

\c poncho_db_test
CREATE TABLE users(
  id INT PRIMARY KEY NOT NULL,
  username CHAR(50) NOT NULL,
  password CHAR(50) NOT NULL,
  name CHAR(50) NOT NULL,
  email CHAR(50) NOT NULL,
  created_at timestamp default now()
);