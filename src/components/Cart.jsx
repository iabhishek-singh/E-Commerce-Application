import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Cart() {
    const cartItems = useSelector(function (state) {
        return state.cart.items;
    });

    const navigate = useNavigate();

    // calcluating prices
    const totalAmount = cartItems.reduce(function (total, item) {
        return total + item.price * item.quantity;
    }, 0);

    // if the cartItems is empty
    if (cartItems.length === 0) {
        return <p className="p-4 text-xl text-center">Your cart is empty.</p>;
    }


    //Checkout button handler
    function handleCheckout() {
        navigate("/checkout", {
            state: {
                items: cartItems, // pass the actual cart items
                total: totalAmount,
            }
        })
    }

    return (
        <div className="cart container mx-auto min-w-full" style={{ padding: '10px' }}>
            <h1 className="text-2xl font-bold text-center" style={{ paddingBottom: '10px' }}>Your Cart</h1>
            {cartItems.map(function (item) {
                return <CartItem key={item.id} item={item} />
            })}
            {/* //total price */}
            <div className="text-right text-lg font-semibold totalAmount">
                Total: Rs {totalAmount.toFixed(3)}
            </div>
            {/* Check Ou Button with Link */}
           <button onClick={handleCheckout} className="bg-blue-700 text-white rounded" style={{ padding: '8px', cursor: 'pointer', float: 'right', marginRight: '60px', marginTop: '20px' }}>Check Out</button>

        </div>
    )
}
export default Cart;