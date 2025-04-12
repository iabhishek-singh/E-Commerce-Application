// Importing necessary dependencies and styles

import "./style.css";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice';

function ProductDetail() {

  // Extract the product ID from the route
  const { id } = useParams();
  // Local state for product data, loading status, and error handling
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  // Fetch product details from the API when the component mounts or the ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handler to dispatch the product to the cart slice
  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  // Conditional rendering based on loading and error state
  if (loading) return <p>Loading product...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  // Render product details when data is available
  return (
    <div className="parentproductDetail">
      <div className="productDetail">
        <img src={product.thumbnail} alt={product.title} style={{ padding: '10px' }} />
        <h2 className="font-bold">{product.title}</h2><br />
        <p className="">Description: {product.description}</p>
        <p className="font-bold font-serif">Rs: {product.price}</p>
        <h3 className="text-orange-600">Category: {product.category}</h3>
        <h3>rating: {product.rating}</h3>
        <h3 className="italic text-amber-600">Return Policy: {product.returnPolicy}</h3>
        <br />

        {/* Add to Cart button */}
        <button
          className="mt-4 bg-maroon-700 border border-amber-500 hover:bg-[#800000] hover:text-white hover:shadow-md transition-all duration-300 ease-in-out rounded-full"
          style={{ padding: '0.5rem 1.25rem', cursor: 'pointer' }} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;


