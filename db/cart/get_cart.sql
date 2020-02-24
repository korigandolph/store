select * from order_products op
join items i on op.product_id = i.product_id
where op.customer_order_id = $1
order by i.product_id;
