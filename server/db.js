const pgp = require('pg-promise')();

const connection = {
  host: '52.21.104.6',
  port: 5432,
  database: 'product_overview',
  user: 'brett',
  password: '',
};

const db = pgp(connection);

module.exports = db;
