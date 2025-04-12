import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../utils/cartSlice.js';
import { Link } from "react-router-dom";
function CartItem(props) {
    const dispatch = useDispatch();
    const { id, title, price, thumbnail, quantity } = props.item;

    // This function Handle Remove functionality for removein the Items
    function handleRemove() {
        dispatch(removeFromCart(id));
    }

    // This function Responsibal for Increase the number of Items
    function handleIncrease() {
        dispatch(increaseQuantity(id));
    }

    // This function Responsibal for Decrease the number of Items

    function handleDecrease() {
        dispatch(decreaseQuantity(id));
    }

    // Display the items
    return (
        <div className="carItem cart-item border p-4 flex items-center gap-4" >
            <img src={thumbnail} alt={title} className="w-24 h-24 object-cover" />
            <div className="flex-1" style={{ pading: '5px' }}>
                <h3 className="font-bold">{title}</h3>
                <p>Total Quantity: {quantity}</p>
                <p>Price: Rs {price} x {quantity} = <strong>Rs {price * quantity}</strong></p>
            </div>
            {/* Button for Decrease Items */}
            <button className="bg-gray-300  rounded" onClick={handleDecrease} style={{ padding: '8px', cursor: 'pointer' }}>−</button>
            <p> <p>Quantity: {quantity}</p></p>
            {/* Button for Increase Items */}
            <button className="bg-gray-300  rounded" onClick={handleIncrease} style={{ padding: '8px', cursor: 'pointer' }}>+</button>
            {/* Button for removing Items */}
            <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                onClick={handleRemove} style={{ padding: '8px', cursor: 'pointer', margin: '5px' }}>
                Remove
            </button>
        </div>
    );
}
// This is a Prop type It's a type-checking mechanism that validates the types of props passed to a React component 
CartItem.prototype = {
    item: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        quantity: PropTypes.number,
    }).isRequired,
};
export default CartItem;