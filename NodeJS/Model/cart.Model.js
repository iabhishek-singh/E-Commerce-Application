// Import mongoose for creating schemas
import mongoose from "mongoose";

// Define the Cart schema for cart items
const cartSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Product
        ref: "Product",                       // Referenced model name
        required: true,                       // Must provide a product reference
    },
    quantity: {
        type: Number,
        required: true,                       // Quantity is required
        min: 1,                               // Minimum quantity is 1
    }
});

// Create a Cart model using the schema
const Cart = mongoose.model("Cart", cartSchema);

// Export the Cart model to be used in cart controllers
export default Cart;
