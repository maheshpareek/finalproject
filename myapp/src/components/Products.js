import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect hooks
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation
import './css/Products.css'; // Import CSS for styling the Products component

// Products component to display a list of products
const Products = () => {
  const [products, setProducts] = useState([]); // State to store the list of products
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  // useEffect to fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // Fetch products from the backend API
        console.log('Fetched products:', response.data); // Log fetched products for debugging
        setProducts(response.data); // Set the fetched products in state
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching products:', error); // Log any errors
        setError('Failed to fetch products. Please try again later.'); // Set error message
        setLoading(false); // Set loading state to false
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.style.display = 'none'; // Hide the image if there's an error loading it
    const errorText = document.createElement('p'); // Create a new paragraph element
    errorText.textContent = 'Image cannot be displayed'; // Set the text content for the error message
    errorText.style.color = '#888'; // Style the error message
    errorText.style.fontSize = '14px';
    e.target.parentNode.appendChild(errorText); // Append the error message to the image's parent container
  };

  // Conditional rendering based on loading, error, and product data states
  if (loading) return <p>Loading products...</p>; // Show a loading message while fetching data
  if (error) return <p>{`Error: ${error}`}</p>; // Show an error message if there was an error fetching data

  // Render the list of products
  return (
    <div className="products-container">
      <h1>Products</h1> {/* Heading for the products list */}
      <p>Welcome to the Urban Bazaar</p> {/* Introductory text */}
      <div className="products-list">
        {products.length === 0 ? (
          <p>No products available</p> // Show a message if there are no products
        ) : (
          products.map((product) => (
            <div key={product._id} className="product-item"> {/* Render each product */}
              {product.image ? (
                <div className="image-container">
                  <img
                    src={product.image} // Display the product image
                    alt={product.name}
                    width="200"
                    onError={handleImageError} // Handle image loading errors
                  />
                </div>
              ) : (
                <div className="empty-image-container">
                  <p>No image available</p> {/* Show a message if there's no image*/}
                </div>
              )}
              <div className="product-details">
                <h2>{product.name}</h2> {/* Display the product name */}
                <p>{product.description}</p> {/* Display the product description */}
                <p className="product-price">Price: ${product.pricing}</p> {/* Display the product price */}
              </div>
              <Link to={`/products/${product._id}`}>
                <button>View Details</button> {/* Link to the product details page */}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products; // Export the Products component for use in other parts of the application
