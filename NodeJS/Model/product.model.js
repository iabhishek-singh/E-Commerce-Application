// Import mongoose for schema definitions
import mongoose from "mongoose";

// Define the Product schema with necessary fields

const productSchema = mongoose.Schema({
    name: {
        type: String,   // name as a string
        required: true  // name is required
    },
    coverImage: {
        type: String,     // coverImage as a string
        required: true,  // coverImage is required
    },
    price: {
        type: Number,    // price as a Number
        required: true,     // price is required
    },
    description: {
        type: String,       // description as a string
        required: true       // description is required
    },
    stockQuantity: {
        type: Number,       // stockQuantity as a Number
        required: true,      // stockQuantity is required
    }

})

// Create a Product model using the schema
const Product = mongoose.model("Product", productSchema);

// Export the Product model for use in controllers and routes
export default Product;