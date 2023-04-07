const model = require('./model.js');
const axios = require('axios');

module.exports = {
  getAll: (req, res) => {
    console.log('wowowowow');
    model.getProducts(req.params.product_id, req.params.page, req.params.count)
    .then(response => {
      res.status(200).send(response.data);
    }).catch(err => res.status(500).send(err));
  },

  getOne: (req, res) => {
    model.getOne()
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(500).send(err));
  },

  getStyles: (req, res) => {
    model.getStyles()
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(500).send(err));
  },

  getRelated: (req, res) => {
    model.getRelated()
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(500).send(err));
  }
}