select * from customer c
join customers_order co on c.customer_id = co.customer_id
where c.email =$1
and co.paid=false;