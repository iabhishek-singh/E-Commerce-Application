// Importing necessary modules and styles
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice';
import { Link } from "react-router-dom";



// Functional component to render a single product item
function ProductItem({ product }) {
  // console.log("product",product);
  const dispatch = useDispatch();

  // Destructuring product properties for easy access
  const { id, title, price, thumbnail, category } = product;


  // Function to handle "Add to Cart" button click
  function handleAddToCart() {
    // Dispatch the selected product to Redux store
    dispatch(addToCart(product));
  }

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} width="100%" style={{ borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }} />
      <h3>{product.title}</h3>
      <h3>category: {product.category}</h3>
      <h3>rating: {product.rating}</h3>
      <p>Rs: {product.price}</p>

      {/* Action buttons: Add to Cart and Product Details */}
      <div className="flex justify-center gap-3">

        {/* Add to Cart button */}
        <button
          className="inline-block rounded-full  border border-amber-500 hover:bg-[#800000] hover:text-white  hover:shadow-md transition-all duration-300 ease-in-out"
          style={{ padding: '0.5rem 1.25rem', cursor: 'pointer' }}
          onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* Link to Product Details page */}
        <Link to={`/product/${id}`} className="inline-block rounded-full text-black hover:text-white border border-amber-500 hover:bg-amber-500 hover:shadow-md transition-all duration-300 ease-in-out"
          style={{ padding: '0.5rem 1.25rem', cursor: 'pointer' }}>
          Product Details
        </Link>
      </div>
    </div>
  );
};

// Prop type validation for the product prop
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default ProductItem;
