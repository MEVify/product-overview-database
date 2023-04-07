const db = require('./db')

module.exports = {
  getProducts: (productId = 3, page = 2, count = 5) => {
    try {
      const query = db.many(`SELECT json_agg(
        SELECT json_build_object(
        'id', product.id,
        'name', product.name,
        'slogan', product.slogan,
        'description', product.description,
        'category', product.category,
        'default_price', product.default_price
        ))
        AS products FROM product
        WHERE id >= ${productId}
        LIMIT ${count};`)
      return query;
    }
    catch(e) {
      console.log('getProducts failed to get products')
    }
  },
}