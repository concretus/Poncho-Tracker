-- 
-- CREATE USER docker;
-- GRANT ALL PRIVILEGES ON DATABASE docker_db TO docker;
CREATE DATABASE poncho_db_test;

\c poncho_db_test
CREATE TABLE pageview(
  uid INT PRIMARY KEY NOT NULL
);