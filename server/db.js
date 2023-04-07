const pgp = require("pg-promise")();

connection = {
  host: 'localhost',
  database: 'product_overview',
  user: 'brett',
  password: '',
}

const db = pgp(connection);

module.exports = db;