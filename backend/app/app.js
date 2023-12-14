// Importing necessary libraries and modules.
import cors from 'cors'; // CORS middleware to enable cross-origin requests.
import express from 'express'; // Express framework 
import mongoose from 'mongoose'; // Mongoose library for MongoDB
import registerRouter from './routes/index.js' // Importing the router
import models from './model/index.js' // Importing models

// Function to initialize application settings
const initialize = (app) => {
    // Applying CORS middleware to allow cross-origin requests
    app.use(cors());

    // Middleware to parse JSON bodies in requests.
    app.use(express.json());

    // Middleware to parse URL-encoded bodies (form data)
    app.use(express.urlencoded());

    // Connecting to MongoDB using mongoose
    mongoose.connect('mongodb+srv://eerantia:eerantia@testcluster.pu9tsrc.mongodb.net/roomies?retryWrites=true&w=majority');

    // Registering the application routes
    registerRouter(app);
}

// Exporting the initialize function to be used in the main application file
export default initialize;