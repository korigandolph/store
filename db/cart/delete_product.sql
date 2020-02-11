delete from order_products 
where order_item_id = $1;
select * from order_products