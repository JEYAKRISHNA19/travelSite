import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signupandlogin.css';


function LoginRegister() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function SwitchContent() {
        const content = document.getElementById('content');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn.addEventListener('click', () => {
            content.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            content.classList.remove("active");
        });
    }

    function register(event) {
        event.preventDefault();
        axios.post("http://localhost:8081/register", { username, email, password })
            .then(res => {
                if (res.data.Status === "Success") {
                    alert("Registration successful!");
                    navigate('/');
                } else {
                    alert(res.data.Error);
                }
            })
            .catch(err => console.log(err));
    }

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    function login(event) {
        event.preventDefault();
        axios.post("http://localhost:8081/login", values)
            .then(res => {
                if (res.data.Status === "Success") {
                    alert("You are signed-In");
                    navigate('/');
                } else {
                    alert(res.data.Error);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='content' id='content'>
            {/* Register */}
            <div className='left'>
                <form onSubmit={register}>
                    <div className='headertext'>
                        <h1>Create Account</h1>
                    </div>
                    <div className='input'>
                        <input type='text' placeholder='Name' className='input1' onChange={e => setUsername(e.target.value)} required />
                    </div>
                    <div className='input'>
                        <input type='email' placeholder='Email' className='input1' onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className='input'>
                        <input type='password' placeholder='Password' className='input1' onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <div className='input'>
                        <button className='btn1'>Register</button>
                    </div>
                </form>
            </div>
            {/* Login */}
            <div className='right'>
                <form onSubmit={login}>
                    <div className='headertext'>
                        <h1>Sign-In</h1>
                    </div>
                    <div className='input'>
                        <input type='email' placeholder='Email' className='input1' pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" onChange={e => setValues({ ...values, email: e.target.value })} required />
                    </div>
                    <div className='input'>
                        <input type='password' placeholder='Password' className='input1' onChange={e => setValues({ ...values, password: e.target.value })} required />
                    </div>
                    <div className='input'>
                        <div className='form'>
                            <input type='checkbox' className='formcheckinput' />
                            <label htmlFor='formcheck' className='formchecklabel'><small>Remember me</small></label>
                        </div>
                        <div className='forgot'>
                            <small><a href='#forgotten'>Forgot Password?</a></small>
                        </div>
                    </div>
                    <div className='input'>
                        <button className='btn1'>Login</button>
                    </div>
                </form>
            </div>
            {/* Switching Panel */}
            <div className='switchcontent'>
                <div className='switch'>
                    <div className='switchpanel switchleft'>
                        <h1>Hello, Again</h1>
                        <p>We are happy to see you back</p>
                        <button className='btn1' id='login' onClick={SwitchContent}>Login</button>
                    </div>
                    <div className='switchpanel switchright'>
                        <h1>WELCOME</h1>
                        <p>Join with us, Explore a New Experience</p>
                        <button className='btn1' id='register' onClick={SwitchContent}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
