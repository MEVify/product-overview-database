const pgp = require('pg-promise')();

const connection = {
  user: 'brett',
  host: 'ec2-44-208-22-137.compute-1.amazonaws.com',
  database: 'product_overview',
  password: 'password',
  port: 5432,
};

const db = pgp(connection);

module.exports = db;
