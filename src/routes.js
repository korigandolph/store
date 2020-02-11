import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Products from './Components/Products';
import Cart from './Components/Cart';
import AuthModel from './Components/AuthModal';
import About from './Components/About';
import Home from './Components/Home';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/products' component={Products}/>
        <Route path='/login' component={AuthModel}/>
        <Route path='/about' component= {About}/>
        
    </Switch>
) 