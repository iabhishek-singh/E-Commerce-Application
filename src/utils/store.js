// Importing configureStore from Redux Toolkit to create the Redux store
import { configureStore } from "@reduxjs/toolkit";

// Importing the cart reducer from cartSlice
import cartReducer from "./cartSlice";


// Creating the Redux store using configureStore
// This store holds the state for the entire application
const store = configureStore({
    reducer: {

        // Registering the 'cart' slice of the state, handled by cartReducer
        cart: cartReducer,
    },
});

export default store;
