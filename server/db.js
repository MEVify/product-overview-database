const pgp = require('pg-promise')();

const connection = {
  user: 'brett',
  host: 'ec2-3-86-159-17.compute-1.amazonaws.com',
  database: 'product_overview',
  password: 'password',
  port: 5432,
};

const db = pgp(connection);

module.exports = db;
