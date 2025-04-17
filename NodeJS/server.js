//importing the required packages

import mongoose from "mongoose";   // MongoDB ODM
import express from "express"     // Express framework for API
import cors from "cors";          // CORS middleware

// Import local modules/files

import mockProducts from "./mockData.js";  // Mock products data to seed the DB
import Product from "./Model/product.model.js"; // Product Mongoose model
import productRoutes from "./Routers/produc.Router.js"; // Product routes
import cartRoutes from "./Routers/cart.Router.js";    // Cart routes
import authRoutes from "./Routers/auth.Router.js";  // Authentication routes


// Create an Express app instance
const app =  express();

// Use CORS middleware to enable cross-origin resource sharing
app.use(cors());

// Use middleware to parse JSON bodies in requests
app.use(express.json());

// Register routes with their respective base paths
app.use("/products", productRoutes);  // Routes for product operations
app.use("/cart", cartRoutes);       // Routes for cart operations
app.use('/api/auth', authRoutes);   // Routes for user authentication

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

// Connect to MongoDB server using mongoose
mongoose.connect("mongodb://localhost:27017/");

// Get the default connection
const db = mongoose.connection;

// Event listener for when the database connection opens
db.on("open", async () => {
    console.log("Database Connection Successfuly");
    try {
        // Remove any existing products in the DB to avoid duplicates
        await Product.deleteMany({});

       // Insert mock products into the database
        await Product.insertMany(mockProducts);
        console.log("--> Mock products inserted into MongoDB");

    } catch (error) {
         // Log any errors that occur during insertion
        console.log("Error inserting mock product", error);

    }
});

// Event listener for database connection errors
db.on("error", () => {
    console.log("Database Connection  is not succsfull");
});
