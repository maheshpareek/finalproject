import React, { useState } from 'react'; // Import React and useState hook
import { useCart } from '../contexts/CartContext'; // Import useCart hook to access cart context
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './css/CheckoutForm.css'; // Import CSS for styling the checkout form

// CheckoutForm component for handling the checkout process
const CheckoutForm = () => {
  const { cart, getTotalAmount } = useCart(); // Access cart items and total amount from cart context
  const [name, setName] = useState(''); // State to store the customer's name
  const [email, setEmail] = useState(''); // State to store the customer's email
  const [address, setAddress] = useState(''); // State to store the shipping address
  const [loading, setLoading] = useState(false); // State to manage loading state during form submission
  const navigate = useNavigate(); // Get the navigate function to handle redirections

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Set loading state to true while processing the order

    // Create an order object with customer details and cart information
    const order = {
      customerName: name,
      customerEmail: email,
      shippingAddress: address,
      items: cart,
      totalAmount: getTotalAmount(), // Calculate the total amount of the order
    };

    try {
      // Send the order details to the backend API
      await axios.post('http://localhost:5000/api/orders', order);
      // Redirect the user to the order summary page after successful submission
      navigate('/order-summary');
    } catch (error) {
      // Log any errors that occur during the order submission
      console.error('Error placing order:', error);
    } finally {
      // Set loading state to false after processing is complete
      setLoading(false);
    }
  };

  // Render the checkout form
  return (
    <div className="checkout-form-container">
      <h1>Checkout</h1> {/* Heading for the checkout form */}
      <div className="amount-summary">
        <p><strong>Total Amount: ${getTotalAmount().toFixed(2)}</strong></p> {/* Display total amount with two decimal places */}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name} // Bind input value to name state
            onChange={(e) => setName(e.target.value)} // Update name state on input change
            required // Make the field required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email} // Bind input value to email state
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            required // Make the field required
          />
        </label>
        <label>
          Shipping Address:
          <textarea
            value={address} // Bind textarea value to address state
            onChange={(e) => setAddress(e.target.value)} // Update address state on input change
            required // Make the field required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Place Order'} {/* Display loading text when processing */}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm; // Export the CheckoutForm component for use in other parts of the app
