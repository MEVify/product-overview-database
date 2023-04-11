const pgp = require('pg-promise')();

const connection = {
  user: 'ubuntu',
  host: 'ec2-52-21-104-6.compute-1.amazonaws.com',
  database: 'product_overview',
  password: 'password',
  port: 5432,
};

const db = pgp(connection);

module.exports = db;
