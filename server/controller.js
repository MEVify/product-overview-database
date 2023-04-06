const model = require('./model.js');
const axios = require('axios');

module.exports = {
  getAll: (req, res) => {
    axios.get(`/products`,
    { params:
      { page: req.query.page || 1,
        count: req.query.count || 5
      }
    }).then(response => {
      res.status(200).send(response.data);
    }).catch(err => res.status(500).send(err));
  },

  getOne: (req, res) => {
    axios.get(`/products/${req.param.product_id}`)
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(500).send(err));
  },

  getStyles: (req, res) => {
    axios.get(`/products/${req.param.product_id}/styles`)
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(500).send(err));
  },

  getRelated: (req, res) => {
    axios.get(`/products/${req.param.product_id}/related`)
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(500).send(err));
  }
}