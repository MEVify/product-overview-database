const pgp = require('pg-promise')();

const connection = {
  user: 'brett',
  host: 'localhost',
  database: 'product_overview',
  password: 'password',
  port: 5432,
};

const db = pgp(connection);

module.exports = db;
