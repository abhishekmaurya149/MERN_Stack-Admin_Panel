// Importing necessary modules and middleware
require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router/auth-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

// Middleware to parse JSON requests
app.use(express.json());

// Using the auth router for the '/api/auth' endpoint
app.use('/api/auth', router);

// Error handling middleware
app.use(errorMiddleware);

// Port configuration
const PORT = process.env.PORT || 5000;

// Connecting to the database and starting the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
