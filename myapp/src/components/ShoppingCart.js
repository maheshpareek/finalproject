import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './css/ShoppingCart.css';

const ShoppingCart = () => {
  const { cart, getTotalAmount, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); 
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id || item.name}>  {/* Ensure a unique key for each item */}
                <div>
                  <h2>{item.name}</h2>
                  <p>Price: ${item.pricing}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${item.pricing * item.quantity}</p>
                </div>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-amount">
            <strong>Total Amount: ${getTotalAmount()}</strong>
          </p>
          <button className="checkout" onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
