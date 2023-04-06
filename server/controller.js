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
    }).catch(err => res.status(404).send(err));
  }
}