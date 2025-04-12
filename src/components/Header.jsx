import "./style.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Header() {

    // Access cart items from Redux state
    const cartItems = useSelector(function (state) {
        return state.cart.items;
    });

    // Calculate the total number of items in the cart
    const totalItems = cartItems.reduce(function (sum, item) {
        return sum + item.quantity;
    }, 0);


    return (
        <div>
            <div className="navigationBar w-full min-w-auto">
                {/* Left Section - Logo */}
                <div className="navrap">
                    <Link to="/"><img src="/logo.png" alt="logo" /></Link>
                </div>
                {/* Right Section - Navigation Links */}
                <div className="navrap">
                    <ul>
                        {/* Link to Home Page */}
                        <li><Link to="/">Home</Link></li>
                        {/* Link to Cart Page with Item Count */}
                        <li><Link to="/Cart">Add to Cart 🛒<span className="totalItemNumber relative -top-2 -left-1">{totalItems}</span> </Link> </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header;