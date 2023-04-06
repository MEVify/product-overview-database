const fs = require("fs");
const path = require("path");
const fastcsv = require("fast-csv");
const pgp = require("pg-promise")();

const connection = {
  host: 'localhost',
  database: 'product_overview',
  user: 'brett',
  password: '',
}

const db = pgp(connection);

const importProductData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/product.csv')
    await db.none(
      `COPY product(id, name, slogan, description, category, default_price)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`
    );
    console.log('product imported successfully');
  } catch (error) {
    console.error('error importing products', error);
  }
};

const importFeaturesData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/features.csv')
    await db.none(
      `COPY features(id, product_id, feature, value)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`
    );
    console.log('features imported successfully');
  } catch (error) {
    console.error('error importing features', error);
  }
};

const importPhotosData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/photos.csv')
    await db.none(
      `COPY photos(id, style_id, url, thumbnail_url)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`
    );
    console.log('photos imported successfully');
  } catch (error) {
    console.error('error importing photos', error);
  }
};

const importRelatedData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/related.csv')
    await db.none(
      `COPY related(id, curent_product_id, related_product_id)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`
    );
    console.log('related imported successfully');
  } catch (error) {
    console.error('error importing related', error);
  }
};

const importSkuData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/skus.csv')
    await db.none(
      `COPY skus(id, style_id, size, quantity)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`
    );
    console.log('skus imported successfully');
  } catch (error) {
    console.error('error importing skus', error);
  }
};

const importStylesData = async () => {
  try {
    const filePath = path.resolve(__dirname, './files/styles.csv')
    await db.none(
      `COPY styles(id,product_id,name,sale_price,original_price,default_style)
      FROM '${filePath}'
      DELIMITER ','
      CSV HEADER;`
    );
    console.log('styles imported successfully');
  } catch (error) {
    console.error('error importing styles', error);
  }
};




//////////// CSV PARSER ////////////

// let productStream = fs.createReadStream("./files/product.csv");
// let productData = [];
// let csvProductStream = fastcsv
//   .parse()
//   .on("data", (data) => {
//     productData.push(data);
//   })
//   .on("end", (data) => {
//     productData.shift();
//   })

//   csvProductStream.pipe(csvStream);

//   // remove the first line: header
//   productData.shift();

// let cartStream = fs.createReadStream("cart.csv");
// let cartData = [];
// let csvStream = fastcsv
//   .parse()
//   .on("data", (data) => {
//     cartData.push(data);
//   })
//   .on("end", (data) => {
//     cartData.shift();
//   })

//   cartStream.pipe(csvStream);