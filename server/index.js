const morgan = require('morgan');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const router = require('./router')

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/products', router);

const PORT = process.env.PORT || 3230;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})