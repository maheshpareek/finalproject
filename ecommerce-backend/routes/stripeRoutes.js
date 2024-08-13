const express = require('express'); // Import Express to create a router
const router = express.Router(); // Create a new router instance
const Stripe = require('stripe'); // Import the Stripe library for payment processing
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Initialize Stripe with the secret key from environment variables

// Route to create a payment intent
router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // Extract the amount from the request body

  try {
    // Create a payment intent with the specified amount, currency, and payment method type
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert amount to cents (Stripe expects the amount in cents)
      currency: 'usd', // Set the currency to USD
      payment_method_types: ['card'], // Specify that the payment method will be a card
    });

    // Respond with the client secret of the created payment intent
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    // Log any errors that occur during the creation of the payment intent
    console.error('Error creating payment intent:', error);
    
    // Respond with a 500 status and an error message if the payment intent creation fails
    res.status(500).json({ message: 'Failed to create payment intent' });
  }
});

// Export the router to be used in other parts of the application
module.exports = router;
