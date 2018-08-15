CREATE DATABASE paulsabart;

CREATE TABLE paulsabart.files
(
  theme VARCHAR (255) NOT NULL,
  category VARCHAR (255) NOT NULL,
  file_path VARCHAR (255),
  file_name VARCHAR (255),
  comment VARCHAR (255),
  inserted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (file_name)
)