const db = require('./db');

module.exports = {
  getProducts: (page = 1, count = 5) => {
    try {
      const query = db.many(
        `SELECT * FROM product
        OFFSET ${((page - 1) * count)}
        LIMIT ${count};`,
      );
      return query;
    }
    catch (err) {
      console.error(`getProducts: ${err}`);
    }
  },

//   getOne: (productId = 1) => {
//     try {
//       const query = db.one(`
//         SELECT json_build_object(
//         'id', product.id,
//         'name', product.name,
//         'slogan', product.slogan,
//         'description', product.description,
//         'category', product.category,
//         'default_price', product.default_price
//         SELECT json_agg(SELECT json_build_object(
//           'feature', features.feature,
//           'value', features.value)
//           FROM features
//           WHERE features.product_id = product.id)
//         )
//         AS products FROM product
//         WHERE id >= ${productId}
//         LIMIT ${count};`)
//       return query;
//     }
//     catch(e) {
//       console.log('getProducts failed to get products')
//     }
//   },
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