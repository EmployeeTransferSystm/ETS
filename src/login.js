// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';
import axios from 'axios';
const LoginForm = ({ onLoginSuccess }) => {
  
  const [values, setValues] = useState({
    username: '',
    password: ''
})
  axios.defaults.withCredentials = true;
  const handleLogin = (event) => {
    console.log('Logging in with:', values);
    event.preventDefault()
    axios.post('http://localhost:3005/auth/adminlogin',values)
    .then(result => {
      if(result.data.loginStatus) {
          localStorage.setItem("valid", true)
          onLoginSuccess()
      } else {
          alert("wrong username or password")
      }
  })
    .catch(err => console.log(err))
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username"  onChange={(e) => setValues({...values, username : e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"  onChange={(e) => setValues({...values, password : e.target.value})} />
      </div>
      <div className="button-group">
        <button className="login-button">Login</button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
