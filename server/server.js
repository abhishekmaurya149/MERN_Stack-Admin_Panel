// Importing necessary modules and middleware
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();
const authRouter = require('./router/auth-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute = require("./router/contact-router")



// let's tackle cors Middleware
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: "GET, POST, UPDATE, DELETE, PUT, PATCH, HEAD",
  Credential: true,
  // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));



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
