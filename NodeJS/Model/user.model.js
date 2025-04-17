// Import mongoose to define the schema
import mongoose from 'mongoose';

// Define the User schema with email and password fields
const userSchema = new mongoose.Schema({
    email: {
        type: String,       // Email as a string
        required: true,     // Email is required
        unique: true        // Each email must be unique
    },
    password: {
        type: String,       // Password as a string
        required: true      // Password is required
    },
});

// Create a User model using the schema
const User = mongoose.model('User', userSchema);

// Export the User model so it can be used in other parts of the application
export default User;
