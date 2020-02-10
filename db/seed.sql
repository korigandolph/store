create table customer (
    customer_id serial primary key,
    email varchar(100) not null,
    password varchar (250) not null
);

create table if not exists items (
    product_id serial primary key,
    product_name varchar(50) not null,
    product_image varchar(250),
    product_description text,
    price decimal not null
);

create table customers_order(
    customer_order_id serial primary key,
    customer_id int references customer(customer_id),
    paid boolean
);

create table order_products(
    order_item_id serial primary key,
    customer_order_id int references customers_order(customer_order_id),
    product_id int references items(product_id),
    qty int,
    price decimal
);