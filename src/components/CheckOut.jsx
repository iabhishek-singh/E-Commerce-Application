import React from 'react';
import { useLocation } from 'react-router-dom';

function Checkout() {

  // Get data passed through React Router's navigate state
  const location = useLocation();

  // Destructure items and total amount from location.state
  // Provide default values to avoid runtime errors if undefined
  const { items, total } = location.state || { items: [], total: 0 };

  return (
    <div>
      {/* Page Title */}
      <h1 className='text-center text-2xl font-bold' style={{ paddingBottom: '8px' }}>Order Summary</h1>
      {/* Items List Section */}
      <div className="checkout-page flex flex-wrap align-center justify-center gap-5 ">
        {items.map((item, index) => (
          <div className='checkOutPage' key={index}>
            {/* Product image */}
            <img src={item.thumbnail} alt="product Image" />
            {/* Product Title */}
            <h3>{item.title}</h3>
            {/* Quantity and Price Calculation */}
            <p>Quantity: {item.quantity}</p>
            <p>Price: Rs {item.price} × {item.quantity} = <strong>Rs {(item.price * item.quantity).toFixed(2)}</strong></p>
          </div>
        ))}

      </div>
      {/* Total Price Section */}
      <h2 className='text-2xl text-center' style={{ margin: '15px' }}>Total: Rs {total.toFixed(3)}</h2> <br />
      {/* Thank You Note */}
      <p className='text-center' style={{ padding: '10px' }}>Thank you for shopping with us!</p>
    </div>
  );

}

export default Checkout;