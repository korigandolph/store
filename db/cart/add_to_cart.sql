insert into order_products(
    customer_order_id,
    product_id,
    qty,
    price
) values (
    ${order_id},
    ${product_id},
    1,
    ${price}
);