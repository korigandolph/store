import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Products from './Components/Products';
import Cart from './Components/Cart';
import AuthModel from './Components/AuthModal';
import About from './Components/About';

export default (
    <Switch>
        <Route exact path='/' component={Products}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/login' component={AuthModel}/>
        <Route path='/about' component= {About}/>
        
    </Switch>
) 