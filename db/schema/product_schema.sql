CREATE TABLE IF NOT EXISTS product (
  id INT PRIMARY KEY UNIQUE,
  name VARCHAR(100),
  slogan VARCHAR(200),
  description VARCHAR(500),
  category VARCHAR(25),
  default_price INT
);

CREATE TABLE IF NOT EXISTS styles (
  id INT PRIMARY KEY,
  product_id INT REFERENCES product(id),
  name VARCHAR(200),
  sale_price INT,
  original_price INT,
  default_style BOOLEAN
);

CREATE TABLE IF NOT EXISTS features (
  id INT PRIMARY KEY,
  product_id INT REFERENCES product(id),
  feature VARCHAR(200),
  value VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS cart (
  id INT PRIMARY KEY,
  product_id INT REFERENCES product(id),
  user_session INT,
  active INT
);

CREATE TABLE IF NOT EXISTS photos (
  id INT PRIMARY KEY,
  style_id INT REFERENCES styles(id),
  url text,
  thumbnail_url text
);

CREATE TABLE IF NOT EXISTS related (
  id INT PRIMARY KEY,
  current_product_id INT REFERENCES product(id),
  related_product_id INT
);

CREATE TABLE IF NOT EXISTS skus (
  id INT PRIMARY KEY,
  style_id INT REFERENCES styles(id),
  size VARCHAR(10),
  quantity INT
);

CREATE INDEX related_currentProductId_index
  ON related(current_product_id);

CREATE INDEX related_relatedProductId_index
  ON related(related_product_id);

CREATE INDEX features_productId_index
  ON features(product_id);

CREATE INDEX style_productId_index
  ON styles(product_id);

CREATE INDEX photos_styleId_index
  ON photos(style_id);

CREATE INDEX skus_styleId_index
  ON skus(style_id);