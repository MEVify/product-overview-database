const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/products', router);
app.get('/loaderio-270ab75e2947899575ebf3f6990d9f8f', () => (
  'loaderio-270ab75e2947899575ebf3f6990d9f8f'
));

const PORT = process.env.PORT || 3230;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
