CREATE DATABASE poncho_db_dev;

\c poncho_db_dev

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  created_at TIMESTAMP default now()
);

CREATE TABLE rfis(
  id SERIAL PRIMARY KEY,
  rfi_number DECIMAL NOT NULL,
  date_created TIMESTAMP NOT NULL,
  date_due TIMESTAMP NOT NULL,
  title VARCHAR(200) NOT NULL,
  question TEXT NOT NULL,
  related_rfi INT references rfis(id),
  created_by INT NOT NULL references users(id)
);
