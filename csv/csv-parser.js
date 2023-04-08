const path = require('path');
const db = require('../server/db');

const importProductData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/product.csv');
    await db.none(
      `COPY product(id, name, slogan, description, category, default_price)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`,
    );
    console.log('product imported successfully');
  } catch (error) {
    console.error('error importing products', error);
  }
};

const importStylesData = async () => {
  try {
    const filePath = path.resolve(__dirname, 'files/styles.csv');
    await db.none(
      `COPY product.styles(id, product_id, name, sale_price, original_price, default_style)
      FROM '${filePath}'
      DELIMITER ','
      NULL AS 'null'
      CSV HEADER;`,
    );
    console.log('styles imported successfully');
  } catch (error) {
    console.error('error importing styles', error);
  }
};

const importFeaturesData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/features.csv');
    await db.none(
      `COPY product.features(id, product_id, feature, value)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`,
    );
    console.log('features imported successfully');
  } catch (error) {
    console.error('error importing features', error);
  }
};
// importFeaturesData();

const importCartData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/cart.csv');
    await db.none(
      `COPY product.cart(id,user_session,product_id,active)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`,
    );
    console.log('cart imported successfully');
  } catch (error) {
    console.error('error importing cart', error);
  }
};

const importPhotosData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/photos.csv');
    await db.none(
      `COPY product.photos(id, style_id, url, thumbnail_url)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`,
    );
    console.log('photos imported successfully');
  } catch (error) {
    console.error('error importing photos', error);
  }
};

const importRelatedData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/related.csv');
    await db.none(
      `COPY product.related(id, current_product_id, related_product_id)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`,
    );
    console.log('related imported successfully');
  } catch (error) {
    console.error('error importing related', error);
  }
};

const importSkuData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/skus.csv');
    await db.none(
      `COPY product.skus(id, style_id, size, quantity)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`,
    );
    console.log('skus imported successfully');
  } catch (error) {
    console.error('error importing skus', error);
  }
};
// importProductData();
// importStylesData();
// importFeaturesData();
// importCartData();
// importPhotosData();
// importRelatedData();
// importSkuData();
