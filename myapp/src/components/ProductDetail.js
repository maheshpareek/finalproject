import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect hooks
import axios from 'axios'; // Import axios for making HTTP requests
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import { useCart } from '../contexts/CartContext'; // Import useCart hook to access cart context
import './css/ProductDetail.css'; // Import CSS for styling the ProductDetail component

// ProductDetail component to display detailed information about a single product
const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const { addToCart } = useCart(); // Get the addToCart function from the CartContext
  const [product, setProduct] = useState(null); // State to store the product details
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state
  const [quantity, setQuantity] = useState(1); // State to manage the quantity of the product to be added to the cart

  // useEffect to fetch product details when the component mounts or when the ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`); // Fetch product details from the backend API
        setProduct(response.data); // Set the product details in state
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching product:', error); // Log any errors
        setError('Failed to fetch product. Please try again later.'); // Set error message
        setLoading(false); // Set loading state to false
      }
    };

    fetchProduct(); // Call the function to fetch product details
  }, [id]); // Dependency array to re-run the effect when the product ID changes

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product, quantity); // Add the product to the cart with the specified quantity
    console.log(`Added ${quantity} of ${product.name} to the cart.`); // Log the action for debugging
  };

  // Handle quantity changes for the product
  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(prevQuantity + amount, 1)); 
    // Update the quantity, ensuring it doesn't go below 1
  };

  // Render loading, error, or product details based on the state
  if (loading) return <p>Loading product details...</p>; // Show a loading message while fetching data
  if (error) return <p>{`Error: ${error}`}</p>; // Show an error message if there was an error fetching data
  if (!product) return <p>Product not found</p>; // Show a message if the product was not found

  // Render the product details
  return (
    <div className="product-detail-container">
      <h1>{product.name}</h1> {/* Display the product name */}
      <p>{product.description}</p> {/* Display the product description */}
      <p>Price: ${product.price}</p> {/* Display the product price */}
      {product.image && <img src={product.image} alt={product.name} width="300" />} {/* Display the product image if available */}
      <p>Sizes: {product.sizes ? product.sizes.join(', ') : 'Not available'}</p> {/* Display available sizes or a fallback message */}
      <p>Colors: {product.colors ? product.colors.join(', ') : 'Not available'}</p> {/* Display available colors or a fallback message */}
      <p>Shipping Time: {product.shippingTime || 'Not specified'}</p> {/* Display the shipping time or a fallback message */}

      <div className="quantity-controls">
        <button onClick={() => handleQuantityChange(-1)}>-</button> {/* Decrease quantity */}
        <span> Quantity: {quantity} </span> {/* Display the current quantity */}
        <button onClick={() => handleQuantityChange(1)}>+</button> {/* Increase quantity */}
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button> {/* Button to add the product to the cart */}
    </div>
  );
};

export default ProductDetail; // Export the ProductDetail component for use in other parts of the application
