import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../redux/userReducer';
import axios from 'axios';
import swal from 'sweetalert';

const AuthModal = props => {
    const [emailInput, setEmailInput]= useState('');
    const [passInput, setPassInput] = useState('');

    const login = ()=>{
        axios.post('/auth/login', {email: emailInput, password: passInput})
        .then(res=>props.getUser(res.data))
        .catch(err=>swal({title: 'Incorrect username or password', icon: 'error'}))
    }

    const register = ()=>{
        axios.post('/auth/register', {email: emailInput, password: passInput})
        .then(res=>props.getUser(res.data))
        .catch(err=>{
            swal({title: 'User Already Exists', icon: 'error'})
            console.log(err)})
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