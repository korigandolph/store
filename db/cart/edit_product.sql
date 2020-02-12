update order_products 
set qty=$2
where order_item_id = $1;
select * from order_products