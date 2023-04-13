const pgp = require('pg-promise')();

const connection = {
  user: 'brett',
  host: 'ec2-3-95-168-61.compute-1.amazonaws.com',
  database: 'product_overview',
  password: 'password',
  port: 5432,
};

const db = pgp(connection);

module.exports = db;
