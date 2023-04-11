const pgp = require('pg-promise')();

const connection = {
  host: 'ec2-52-21-104-6.compute-1.amazonaws.com',
  database: 'product_overview',
  user: 'brett',
  password: '',
};

const db = pgp(connection);

module.exports = db;
