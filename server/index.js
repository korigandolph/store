require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      cartCtrl = require('./controllers/cartController'),
      authCtrl = require('./controllers/authController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET}= process.env,
      app = express();

app.use(express.json());
app.use(session({
    resave: false, 
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000*60*60*24*365}
}))

//ENDPOINTS
//auth endpoints
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);

//products endpoints
app.get('/api/products', cartCtrl.getProducts);
app.delete('/api/product/:id', cartCtrl.deleteProduct)

//cart endpoints
app.get('/api/cart/:id', cartCtrl.getCart);
app.post('/api/cart', cartCtrl.addToCart);

massive(CONNECTION_STRING).then(db=>{
    app.set('db', db)
    console.log('db connected')
    const port = SERVER_PORT;
    app.listen(port, ()=>console.log(`Listening on ${port}`))
})