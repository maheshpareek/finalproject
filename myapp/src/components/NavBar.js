import React from 'react';
import './css/NavBar.css';
import { Link } from 'react-router-dom';
import LoginButton from './Login';
import LogoutButton from './Logout';
import { useAuth0 } from '@auth0/auth0-react';
import { useCart } from '../contexts/CartContext';

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  const { cart } = useCart(); // Get cart from context

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <div className="navbar-logo">Urban Bazaar</div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({totalItems})</Link> {/* Link to cart with item count */}
        </li>
      </ul>
      <div className="navbar-auth">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
};

export default NavBar;
