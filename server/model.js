

module.exports = {

  getProducts: (page, count, productId) => {
    const query = `SELECT json_agg(
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
      LIMIT ${count};`
      return db.one(query);
  },

}