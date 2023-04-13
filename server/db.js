const pgp = require('pg-promise')();

const connection = {
  user: 'brett',
  host: 'ec2-3-82-129-44.compute-1.amazonaws.com',
  database: 'product_overview',
  password: 'password',
  port: 5432,
};

const db = pgp(connection);

module.exports = db;
