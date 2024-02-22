// Importing necessary modules and middleware
require('dotenv').config();
const express = require('express');
const app = express();
const authRouter = require('./router/auth-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute = require("./router/contact-router")

// Middleware to parse JSON requests
app.use(express.json());

// Using the auth router for the '/api/auth' endpoint
app.use('/api/auth', authRouter);
app.use("/api/form", contactRoute);

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
