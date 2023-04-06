CREATE TABLE IF NOT EXISTS product (
  id INT PRIMARY KEY UNIQUE,
  name VARCHAR(100),
  slogan VARCHAR(200),
  description VARCHAR(500),
  category VARCHAR(25),
  default_price INT
);

CREATE TABLE styles (
  id INT PRIMARY KEY,
  product_id INT REFERENCES product(id),
  name VARCHAR(25),
  sale_price INT,
  original_price INT,
  default_style INT
);

CREATE TABLE features (
  id INT PRIMARY KEY,
  product_id INT REFERENCES product(id),
  feature VARCHAR(50) UNIQUE,
  value VARCHAR(50) UNIQUE
);

CREATE TABLE cart (
  id INT PRIMARY KEY,
  product_id INT REFERENCES product(id),
  user_session INT,
  active INT
);

CREATE TABLE photos (
  id INT PRIMARY KEY,
  style_id INT REFERENCES styles(id),
  url VARCHAR(250),
  thumbnail_url VARCHAR(250)
);

CREATE TABLE related (
  id INT PRIMARY KEY,
  current_product_id INT REFERENCES product(id),
  related_product_id INT
);

CREATE TABLE skus (
  id INT PRIMARY KEY,
  style_id INT REFERENCES styles(id),
  size VARCHAR(3),
  quantity INT
);