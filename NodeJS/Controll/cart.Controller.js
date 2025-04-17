// Import mongoose, Cart model, and Product model

import mongoose from "mongoose";
import Cart from "../Model/cart.Model.js";
import Product from "../Model/product.model.js"

// POST /cart -Add Product to cart

export async function addToCart(req, res) {
    try {
        // Destructure productId and quantity from request body
        const { productId, quantity } = req.body;

        console.log("Received productId:", productId); // Log received productId for debugging
        
        // Validate that productId is a valid MongoDB ObjectIdists
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: "Invalid Product ID" });
        }
        // Find the product in the database by its ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not Found" });
        }

       // Check if the product already exists in the cart

        let cartItem = await Cart.findOne({ product: productId })

        if (cartItem) {
             // If the item exists, increment its quantity
            cartItem.quantity += quantity;
            await cartItem.save();
        } else {
             // Otherwise, create a new cart item document
            cartItem = new Cart({ product: productId, quantity })
            await cartItem.save();
        }
         // Respond with the created/updated cart item
        res.status(201).json(cartItem);


    } catch (err) {
        console.error("Error in addToCart:", err); // Log the error for debugging
        res.status(500).json({ error: "Failed to add to cart" });
    }
}


// PUT /cart/:id - Update the quantity of an existing cart item
export async function updateCartItem(req, res) {
    try {
        const { id } = req.params;     // Get the cart item ID from URL parameters
        const { quantity } = req.body;  // Get the new quantity from request body
        
        // Validate that the quantity is at least 1
        if (quantity < 1) {
            return res.status(400).json({ error: "Quantity must be at least 1" });
        }
         // Find the cart item by ID and update its quantity, returning the new document
        const cartItem = await Cart.findByIdAndUpdate(
            id,
            { quantity },
            { new: true }
        );

        if (!cartItem) {
            return res.status(404).json({ error: "Cart item not found" });
        }
        // Respond with the updated cart item
        res.status(200).json(cartItem);
    } catch (err) {
        res.status(500).json({ error: "Failed to update cart item" });
    }
}

// DELETE /cart/:id - Remove a cart item by ID

export async function removeCartItem(req, res) {
    try {
        const { id } = req.params;      // Get the cart item ID from URL parameters
          // Find the cart item and delete it
        const deletedItem = await Cart.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ error: "cart item not found " });
        }
        // Respond confirming deletion
        res.status(200).json({ messsage: "Item removed from cart" });
    } catch (err) {
        res.status(500).json({ error: "Faild to remove cart item " });
    }
}

// GET /cart - Retrieve all cart items, populated with product details
export async function getAllCartItems(req, res) {
    try {
        // Find all cart items and populate the product field with product details
        const items = await Cart.find().populate("product");

        if (items.length === 0) {
            return res.status(200).json({ message: "Cart is empty" });
        }
         // Respond with the retrieved cart items
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch cart items" });
    }
}

