COPY cart(id,user_session,product_id,active)
FROM 'csv/files/cart.csv'
DELIMITER ','
CSV HEADER;

COPY features(id,product_id,feature,value)
FROM 'csv/files/features.csv'
DELIMITER ','
CSV HEADER;

COPY photos(id,style_id,url,thumbnail_url)
FROM 'csv/files/photos.csv'
DELIMITER ','
CSV HEADER;

COPY related(id,curent_product_id,related_product_id)
FROM 'csv/files/related.csv'
DELIMITER ','
CSV HEADER;

COPY skus(id,style_id,size,quantity)
FROM 'csv/files/skus.csv'
DELIMITER ','
CSV HEADER;

COPY styles(id,product_id,name,sale_price,original_price,default_style)
FROM 'csv/files/styles.csv'
DELIMITER ','
CSV HEADER;