// This file provides mock product data for seeding MongoDB
const mockProducts = [
    {
      name: "Laptop",
      coverImage: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg",
      price: 3899.99,
      description: "High-performance laptop for work and gaming.",
      stockQuantity: 10
    },
    {
      name: "Headphones",
      coverImage: "https://m.media-amazon.com/images/I/61+R5rOj9+L.jpg",
      price: 1199.99,
      description: "Noise-cancelling wireless headphones.",
      stockQuantity: 20
    },
    {
      name: "Smartphone",
      coverImage: "https://m.media-amazon.com/images/I/61nzbNdA7hL.jpg",
      price: 7499.99,
      description: "Latest model with OLED screen.",
      stockQuantity: 15
    },
    {
      name: "Redmi 7-A",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J_WD_AV3mCXfKEK9jBkfBCrZRHIvh5eN0A&s",
      price: 10499.50,
      description: "Latest model with OLED screen.",
      stockQuantity: 25
    }
  ];
  
// Export the mock data so it can be imported elsewhere (e.g., server.js)
export default mockProducts;