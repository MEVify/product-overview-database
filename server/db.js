const pgp = require('pg-promise')();

const connection = {
  host: 'localhost',
  database: 'product_overview',
  user: 'brett',
  password: '',
};

const db = pgp(connection);

module.exports = db;
