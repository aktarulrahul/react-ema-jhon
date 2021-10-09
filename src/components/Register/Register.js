import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Create Account</h2>
        <form onSubmit="">
          <input type="email" placeholder="Enter your email" />
          <br />
          <input type="password" placeholder="Your Password" />
          <br />

          <input type="password" placeholder="Re-enter Password" />
          <br />
          <input className="btn-product" type="submit" value="Register" />
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
