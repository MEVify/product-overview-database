const db = require('./db');

module.exports = {
  getProducts: (page = 1, count = 5) => {
    try {
      return db.many(
        `SELECT * FROM product
        OFFSET ${((page - 1) * count)}
        LIMIT ${count};`,
      );
    }
    catch (err) {
      console.error(`getProducts: ${err}`);
    }
  },

  getOne: (productId) => (
    db.one(
      `SELECT json_build_object(
        'id', id,
        'name', name,
        'slogan', slogan,
        'description', description,
        'category', category,
        'default_price', default_price,
        'features', (
          SELECT json_agg(
            json_build_object(
            'feature', feature,
            'value', value
            )
          )
          FROM features f
          WHERE f.product_id = ${productId}
        )
      )
        AS product
        FROM product p
        WHERE id = ${productId};`,
    )
  ),
};

// const query = db.many(
//   `SELECT json_agg(
//   json_build_object(
//   'id', id,
//   'name', name,
//   'slogan', slogan,
//   'description', description,
//   'category', category,
//   'default_price', default_price
//   )
//   )
//   AS products FROM product
//   LIMIT ${count};`,
// );