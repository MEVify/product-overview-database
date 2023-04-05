CREATE TABLE IF NOT EXISTS product.product (
  id INT PRIMARY KEY UNIQUE,
  name VARCHAR(100),
  slogan VARCHAR(200),
  description VARCHAR(500),
  category VARCHAR(25),
  default_price INT
);

CREATE TABLE product.styles (
  id INT PRIMARY KEY,
  product_id INT REFERENCES product.product(id),
  name VARCHAR(25),
  sale_price INT,
  original_price INT,
  default_style INT
);

CREATE TABLE product.features (
  id INT PRIMARY KEY,
  product_id INT REFERENCES product.product(id),
  feature VARCHAR(50) UNIQUE,
  value VARCHAR(50) UNIQUE
);

CREATE TABLE product.cart (
  id INT PRIMARY KEY,
  product_id INT REFERENCES product.product(id),
  user_session INT,
  active INT
);

CREATE TABLE product.photos (
  id INT PRIMARY KEY,
  style_id INT REFERENCES product.styles(id),
  url VARCHAR(250),
  thumbnail_url VARCHAR(250)
);

CREATE TABLE product.related (
  id INT PRIMARY KEY,
  current_product_id INT REFERENCES product.product(id),
  related_product_id INT
);

CREATE TABLE product.skus (
  id INT PRIMARY KEY,
  style_id INT REFERENCES product.styles(id),
  size VARCHAR(3),
  quantity INT
);