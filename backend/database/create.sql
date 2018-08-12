CREATE DATABASE paulsabart;

CREATE TABLE paulsabart.files
(
  theme VARCHAR (30) NOT NULL,
  category VARCHAR (30) NOT NULL,
  file_path VARCHAR (255),
  file_name VARCHAR (255),
  comment VARCHAR (50),
  inserted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (file_name)
)