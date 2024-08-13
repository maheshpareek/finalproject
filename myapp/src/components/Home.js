import React from 'react'; // Import React to create the component
import Products from './Products'; // Import the Products component to display the list of products

// Home component to display the welcome message and the list of products
const Home = () => {
  return (
    <div>
      <h2>Welcome to the Urban Bazaar</h2> {/* Display a welcome message */}
      <Products /> {/* Render the Products component to display available products */}
    </div>
  );
};

export default Home; // Export the Home component for use in other parts of the application
