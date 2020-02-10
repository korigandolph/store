import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer';
import axios from 'axios';

const AuthModal = props => {
    const [emailInput, setEmailInput]= useState('');
    const [passInput, setPassInput] = useState('');

    const login = ()=>{
        axios.post('/auth/login', {email: emailInput, password: passInput})
        .then(res=>props.getUser(res.data))
        .catch(err=>console.log(err))
    }

    const register = ()=>{
        axios.post('/auth/register', {email: emailInput, password: passInput})
        .then(res=>props.getUser(res.data))
        .catch(err=>console.log(err))
    }


    return (
        <div className='auth-modal'>
            <input
                value={emailInput}
                placeholder= 'Email'
                onChange={(e) => setEmailInput(e.target.value)}/>
            <input
                type='password'
                value={passInput}
                placeholder= 'Password'
                onChange={(e)=>setPassInput(e.target.value)}/>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
        </div>
    )
}

export default connect(null, {getUser})(AuthModal);