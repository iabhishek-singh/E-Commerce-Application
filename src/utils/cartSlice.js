// Importing createSlice from Redux Toolkit to handle cart-related state logic

import { createSlice } from "@reduxjs/toolkit";

// Initial state of the cart, with an empty array of items
const initialState = {
    items: [],
};

// Creating the cart slice
const cartSlice = createSlice({
    name: "cart",   // Name of the slice (used internally by Redux)
    initialState,    // The initial state defined above

    reducers: {

        // Adds an item to the cart
        addToCart(state, action) {
            const existing = state.items.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        // Check if item already exists in the cart
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        // If item exists, increase its quantity
        increaseQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },

        // Decreases the quantity of a specific item (if greater than 1)
        decreaseQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;