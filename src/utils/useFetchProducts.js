// Importing React hooks
import { useEffect, useState } from 'react';

// Custom hook for fetching products from an external API
const useFetchProducts = () => {

  // State to store the fetched products
  const [products, setProducts] = useState([]);

  // State to track loading status
  const [loading, setLoading] = useState(true);


  // State to handle and store any error messages
  const [error, setError] = useState('');

  // useEffect runs once when the component using this hook is mounted
  useEffect(() => {
    // Define an async function to fetch data from the API
    const fetchProducts = async () => {
      try {

        // Send GET request to fetch products
        const res = await fetch('https://dummyjson.com/products');

        // If the response is not OK, throw an error
        if (!res.ok) throw new Error('Failed to fetch products');

        // Parse the JSON data from the response
        const data = await res.json();

        // Update the products state with the fetched data
        setProducts(data.products);
      } catch (err) {
        // If any error occurs during fetch, store it in error state
        setError(err.message);
      } finally {
        // Whether success or error, stop the loading spinner
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchProducts();
  }, []); // Empty dependency array means this effect runs only once

  // Return products data, loading state, and error for the component to use
  return { products, loading, error };
};

export default useFetchProducts;
