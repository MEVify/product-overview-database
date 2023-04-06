const fs = require("fs");
const fastcsv = require("fast-csv");
const pgp = require("pg-promise")();

const connection = {
  host: 'localhost',
  database: 'product_overview',
  user: 'brett',
  password: '',
}

const db = pgp(connection);

let productStream = fs.createReadStream("./files/product.csv");
let productData = [];
let csvProductStream = fastcsv
  .parse()
  .on("data", (data) => {
    productData.push(data);
  })
  .on("end", (data) => {
    productData.shift();
  })

  csvProductStream.pipe(csvStream);

  // remove the first line: header
  productData.shift();


  const importCharacteristicsData = async () => {
    try {
      const filePath = path.resolve(__dirname, './files/product.csv')
      await db.none(
        `COPY characteristics(id, product_id, name)
        FROM '${filePath}'
        DELIMITER ','
        CSV HEADER;`);
      console.log('product imported successfully');
    } catch (error) {
      console.error('error importing products', error);
    }
  };


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