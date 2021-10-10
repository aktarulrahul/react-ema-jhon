import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const redirect_uri = location.state?.from || '/';
  const history = useHistory();
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input className="btn-product" type="submit" value="Login" />
        </form>
        <p>
          New to Ema John? <Link to="/register">Create Account</Link>
        </p>
        <button className="btn-product" onClick={handleGoogleLogin}>
          Google Sign
        </button>
      </div>
    </div>
  );
};

export default Login;
