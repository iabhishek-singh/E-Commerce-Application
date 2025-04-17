// Import the Product model to interact with product data in the database
import Product from "../Model/product.model.js";

// GET /products - Fetch a list of all products from MongoDB
export async function getAllProduct(req, res) {
    try {
        // Retrieve all products
        const product = await Product.find();
        // Respond with the list of products
        res.status(200).json(product);
    } catch(err) {
        res.status(500).json({ error: "Failed to find products" });
    }
}

// GET /products/:id - Fetch details of a single product by its ID
export async function getAllProductById(req, res) {
    try {
        // Retrieve a product by its ID from the URL parameter
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });

        // Respond with the product details
        res.status(200).json(product);
    } catch(err) {
        // If the provided ID is invalid, respond with a 400 status
        res.status(400).json({ error: "Invalid Product ID" });
    }
}
