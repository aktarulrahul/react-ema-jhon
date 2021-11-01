import React from 'react';
import './Headder.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user.email ? <NavLink to="/orders">My Orders</NavLink> : ''}

        {user.email ? (
          <>
            <span id="user">{user.displayName}</span>
            <button onClick={logOut}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
