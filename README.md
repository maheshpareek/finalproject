# Final Project

Welcome to the Final Project! This guide will walk you through the steps to set up and run the project. Follow the instructions carefully, and you'll have the project up and running in no time.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Clone the Repository](#clone-the-repository)
- [Setup and Install Dependencies](#setup-and-install-dependencies)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Frontend](#frontend)
- [Backend](#backend)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js**: Download and install the latest version from [nodejs.org](https://nodejs.org/)
- **npm**: Node.js package manager (comes with Node.js)
- **Git**: Download and install Git from [git-scm.com](https://git-scm.com/)

## Clone the Repository

To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/maheshpareek/finalproject.git

Navigate to the project directory:
cd finalproject

Setup and Install Dependencies
1. Install Backend Dependencies
Navigate to the backend directory and install the required packages:
cd ecommerce-backend
npm install

Environment Variables
You'll need to set up some environment variables for the project to work correctly. Create a .env file in both the backend and frontend directories.

Backend Environment Variables
In the backend directory, create a .env file with the following content:

PORT=5000
MONGO_URI=<Your_MongoDB_Connection_String>
STRIPE_SECRET_KEY=<Your_Stripe_Secret_Key>

Replace <Your_MongoDB_Connection_String> with your MongoDB connection string and <Your_Stripe_Secret_Key> with your Stripe secret key.

Frontend Environment Variables
In the frontend directory, create a .env file with the following content:

REACT_APP_AUTH0_DOMAIN=<Your_Auth0_Domain>
REACT_APP_AUTH0_CLIENT_ID=<Your_Auth0_Client_ID>
REACT_APP_AUTH0_AUDIENCE=<Your_Auth0_Audience>
REACT_APP_STRIPE_PUBLISHABLE_KEY=<Your_Stripe_Publishable_Key>

Replace <Your_Auth0_Domain>, <Your_Auth0_Client_ID>, <Your_Auth0_Audience>, and <Your_Stripe_Publishable_Key> with your respective Auth0 and Stripe credentials.

Running the Project
1. Running the Backend
Navigate to the backend directory and start the server:

cd ecommerce-backend
npm start

The backend server should now be running on http://localhost:5000.

2. Running the Frontend
Open a new terminal, navigate to the frontend directory, and start the React application:

cd frontend
npm start

The frontend React app should now be running on http://localhost:3000.

Frontend
The frontend of the project is built using React. It includes components such as:

NavBar: Handles navigation.
Profile: Displays user profile information.
Home: The landing page of the application.
ProductDetail: Displays detailed information about a specific product.
ShoppingCart: Manages and displays the user's shopping cart.
CheckoutForm: Handles the checkout process.
OrderSummary: Displays a summary of the user's order.
StripeCheckoutButton: Handles Stripe payment processing.
Backend
The backend is built using Node.js and Express. It handles API routes, user authentication, and interactions with the MongoDB database. The backend also integrates with Stripe for payment processing.

Testing
You can test the application by navigating through the different pages and performing actions such as adding items to the cart, checking out, and viewing order summaries.

Contributing
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. Please make sure to follow the code style and include relevant tests.


