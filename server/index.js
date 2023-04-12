const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const router = require('./router');
const payload = require('../k6ProductIds.js');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/products', router);

// Verify for loader.io
app.get('/loaderio-270ab75e2947899575ebf3f6990d9f8f', (req, res) => (
  res.send('loaderio-270ab75e2947899575ebf3f6990d9f8f')
));

// Payload for loader.io
app.get('/load-file', (req, res) => { res.send(payload); });

const PORT = process.env.PORT || 3230;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
