require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      nodemailer = require('nodemailer'),
      cartCtrl = require('./controllers/cartController'),
      authCtrl = require('./controllers/authController'),
      stripeCtrl = require('./controllers/stripeController'),
        {SERVER_PORT, 
        CONNECTION_STRING, 
        SESSION_SECRET, 
        EMAIL, 
        PASSWORD}= process.env,
      app = express();

//nodemailer transporter
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
})

app.use(express.json());
app.use(session({
    resave: false, 
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000*60*60}
}))

//ENDPOINTS
//auth endpoints
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);

//products endpoints
app.get('/api/products', cartCtrl.getProducts);
app.delete('/api/product/:id', cartCtrl.deleteProduct)
app.put('/api/product/:id', cartCtrl.editProduct)

//cart endpoints
app.get('/api/cart/:id', cartCtrl.getCart);
app.post('/api/cart', cartCtrl.addToCart);

//stripe
app.post('/api/payment', stripeCtrl.pay);

massive(CONNECTION_STRING).then(db=>{
    app.set('db', db)
    console.log('db connected')
    app.set('transporter', transporter)
    const port = SERVER_PORT;
    app.listen(port, ()=>console.log(`Listening on ${port}`))
})

