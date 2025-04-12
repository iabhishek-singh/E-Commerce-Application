// Importing required modules and styles

import React, { useState } from 'react';
import useFetchProducts from '../utils/useFetchProducts';
import ProductItem from './ProductItem';
import './style.css';

// Functional component to list and filter products
function ProductList() {

  // Fetching products using custom hook
  const { products, loading, error } = useFetchProducts();

  // State to manage the search input value
  const [searchTerm, setSearchTerm] = useState('');


  // Handler for input changes in the search bar
  function handleSearchChange(event) {
    setSearchTerm(event.target.value.toLowerCase());
  }

  // Filtering the product list based on search term  
  const filteredProducts = products.filter(function (product) {
    return product.title.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);
  });

  // Show loading or error messages before rendering products
  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;


  // Render the product list
  return (
    <div className="productListWrapper">

      {/* Search Bar */}
      <div className="searchBar">
        <h1 className='text-2xl font-bold text-amber-500'> Search</h1>
        <input
          type="text"
          placeholder="Search by name or category"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border-2 text-xl rounded  w-100 max-w-10xl"
        />
      </div>

      {/* Grid layout to show all filtered products */}
      <div className="productList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {
          filteredProducts.map(function (product) {
            return <ProductItem key={product.id} product={product} />
          })
        }
      </div>
    </div>
  );
}

export default ProductList;
