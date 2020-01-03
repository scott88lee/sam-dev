DROP TABLE users;
DROP TABLE products;
DROP TABLE inventory;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    pwd_hash TEXT NOT NULL,
    email VARCHAR(55) NOT NULL
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    SKU VARCHAR(30) NOT NULL,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    price DECIMAL
);

CREATE TABLE inventory (
    item_id INT NOT NULL,
    product_id INT NOT NULL,
    cost_price DECIMAL,
    sale_price DECIMAL
);


INSERT INTO products (SKU, brand, model, price)
VALUES ('YMAF310', 'YAMAHA', 'F310 Acoustic Guitar', 199.90);

INSERT INTO products (SKU, brand, model, price)
VALUES ('CR20', 'ORANGE', 'Crush 20 Guitar amp', 200);

INSERT INTO products (SKU, brand, model, price)
VALUES ('ZMG3XN', 'ZOOM', 'G3Xn Effects Processor', 135.90);


INSERT INTO inventory (product_id, cost_price)
VALUES (1, 99)