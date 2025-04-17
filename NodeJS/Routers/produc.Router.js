// Import Express and controller functions
import express, { Router } from "express";
import authenticate from "../Middleware/auth.middleware.js";
import { getAllProduct, getAllProductById } from "../Controll/productController.js";

// Create a new router instance
const router = express.Router();

// Protect all routes below
router.use(authenticate); 

// Route to fetch all products
router.get("/", getAllProduct);

// Route to fetch a single product by its ID
router.get("/:id",getAllProductById);

// Export the router to be used in server.js
export default router;