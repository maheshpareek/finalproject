import React from 'react'; // Import React to create the component
import { useCart } from '../contexts/CartContext'; // Import useCart hook to access cart context
import StripeCheckoutButton from './StripeCheckoutButton'; // Import StripeCheckoutButton for handling payments, ensure the path is correct
import './css/OrderSummary.css'; // Import CSS for styling the OrderSummary component

// OrderSummary component to display a summary of the user's order
const OrderSummary = () => {
  const { cart, getTotalAmount } = useCart(); // Access cart items and total amount from cart context
  const totalAmount = getTotalAmount(); // Calculate the total amount of the order

  console.log('Total Amount:', totalAmount); // Debug log to check the total amount in the console

  return (
    <div className="order-summary-container">
      <h1>Order Summary</h1> {/* Heading for the order summary */}
      <ul>
        {cart.map(item => (
          <li key={item.id}> {/* Iterate over each item in the cart and render its details */}
            <h2>{item.name}</h2> {/* Display the name of the item */}
            <p>Price: ${item.pricing}</p> {/* Display the price of the item */}
            <p>Quantity: {item.quantity}</p> {/* Display the quantity of the item */}
            <p>Total: ${item.pricing * item.quantity}</p> {/* Calculate and display the total price for the item */}
          </li>
        ))}
      </ul>
      <p className="total-amount">
        <strong>Total Amount: ${totalAmount?.toFixed(2) || '0.00'}</strong> {/* Display the total amount with two decimal places */}
      </p>
      <StripeCheckoutButton amount={totalAmount} /> {/* Render the StripeCheckoutButton and pass the total amount for payment */}
    </div>
  );
};

export default OrderSummary; // Export the OrderSummary component for use in other parts of the application
