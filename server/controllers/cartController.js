module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db');
        db.products.get_products()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
    },
    addToCart: (req, res) => {
        const {customer_order_id, product_id, price} = req.body,
              db = req.app.get('db');

        db.cart.add_to_cart({order_id: customer_order_id, product_id, price})
        .then(data => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },
    getCart: (req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.cart.get_cart(id)
        .then(cart => res.status(200).send(cart))
        .catch(err => res.status(500).send(err));
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.cart.delete_product(id).then(results => {
          res.status(200).send(results)
        }).catch(err => res.status(500).send(err))
    },
    editProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {qty} = req.body
        db.cart.edit_product([id,qty]).then(results => {
          res.sendStatus(200)
        }).catch(err => res.status(500).send(err))
      },
}