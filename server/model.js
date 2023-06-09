const db = require('./db');

module.exports = {
  getProducts: (page = 1, count = 5) => (
    db.many(
      `SELECT * FROM product
      OFFSET ${((page - 1) * count)}
      LIMIT ${count};`,
    )
  ),

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
        FROM product
        WHERE id = ${productId};`,
    )
  ),

  getStyles: (productId) => (
    db.one(
      `SELECT json_build_object(
        'product_id', ${productId},
        'results', (
          SELECT json_agg(
            json_build_object(
              'style_id', id,
              'name', name,
              'original_price', original_price,
              'sale_price', sale_price,
              'default?', default_style,
              'photos', (
                SELECT json_agg(
                  json_build_object(
                  'thumbnail_url', thumbnail_url,
                  'url', url
                  )
                )
                FROM photos
                WHERE photos.style_id = styles.id
              ),
              'skus', (
                SELECT json_object_agg(
                  skus.id, (
                    json_build_object(
                      'quantity', skus.quantity,
                      'size', skus.size
                    )
                  )
                )
                  AS skus
                  FROM skus
                  WHERE skus.style_id = styles.id
              )
            )
          )
            FROM styles
            WHERE styles.product_id = ${productId}
        )
      )
      AS product
      FROM product
      WHERE product.id = ${productId};`,
    )
  ),

  getRelated: (productId) => (
    db.one(
      `SELECT json_agg(
        related_product_id
      )
      AS related
      FROM related
      WHERE related.current_product_id = ${productId};`,
    )
  ),
};
