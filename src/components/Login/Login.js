import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit="">
          <input type="email" placeholder="Enter your email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input className="btn-product" type="submit" value="Login" />
        </form>
        <p>
          New to Ema John? <Link to="/register">Create Account</Link>
        </p>
        <button className="btn-product">Google Sign</button>
      </div>
    </div>
  );
};

export default Login;
