const model = require('./model');

module.exports = {
  getAll: (req, res) => {
    model.getProducts(req.query.page, req.query.count)
      .then((response) => {
        res.status(200).send(response);
      }).catch((err) => res.status(500).send(err));
  },

  getOne: (req, res) => {
    model.getOne(req.params.product_id)
      .then((response) => res.status(200).send(response.product))
      .catch((err) => res.status(500).send(err));
  },

  getStyles: (req, res) => {
    model.getStyles(req.params.product_id)
      .then((response) => res.status(200).send(response.product))
      .catch((err) => res.status(500).send(err));
  },

  getRelated: (req, res) => {
    model.getRelated(req.params.product_id)
      .then((response) => res.status(200).send(response.related))
      .catch((err) => res.status(500).send(err));
  },
};
