// Import Express and cart controller functions
import express from "express";

import authenticate from "../Middleware/auth.middleware.js";
import { getAllCartItems } from "../Controll/cart.Controller.js";
import{ addToCart, updateCartItem, removeCartItem} from "../Controll/cart.Controller.js";

// Create a new router instance
const router = express.Router();

// Protect all routes below
router.use(authenticate); 

// POST /cart - Add product to cart
router.post("/", addToCart);

// PUT /cart/:id - Update quantity
router.put("/:id", updateCartItem);

// DELETE /cart/:id - Remove from cart
router.delete("/:id", removeCartItem);

//get /cart -fetch all the cart item
router.get("/", getAllCartItems);


// Export the router to be used in server.js
export default router;

