import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail'; 
import ShoppingCart from './components/ShoppingCart';
import CheckoutForm from './components/CheckoutForm'; // Import CheckoutForm
import OrderSummary from './components/OrderSummary'; // Import OrderSummary
import StripeCheckoutButton from './components/StripeCheckoutButton'; // Import StripeCheckoutButton

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckoutForm />} /> {/* Route for CheckoutForm */}
        <Route path="/order-summary" element={<OrderSummary />} /> {/* Route for OrderSummary */}
        <Route path="/payment" element={<StripeCheckoutButton />} /> {/* Route for StripeCheckoutButton */}
      </Routes>
    </div>
  );
}

export default App;
