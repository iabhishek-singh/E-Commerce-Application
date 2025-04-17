# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

##  Follow the steps below to get the project up and running on your local machine.

Prerequisites
Make sure you have the following installed:

 ---> Node.js (version 14 or higher)
 ---> npm (comes with Node.js) or Yarn (optional)



## Header Component 

In Header Component i create a navigation bar . 
The navigation bar contain first thing logo of the E-commerce web Application and second menue of nav bar "Home Checkout Add to Cart 🛒" .





#  E-commerce REST API (Node.js + Express + MongoDB)
This is a simple E-commerce REST API built using Node.js, Express.js, and MongoDB. It provides basic functionalities such as managing products, cart operations, and user authentication using JWT. Data is stored in MongoDB, and mock products are inserted at server startup.

# Features
Product Listing (GET /products)

Get Product by ID (GET /products/:id)

Add/Update/Delete Cart Items

User Registration & Login with JWT Authentication

MongoDB Integration

Mock Data Injection on Server Start

Project Structure

.
├── Controllers/
│   ├── cart.Controller.js
│   └── productController.js
├── Model/
│   ├── cart.Model.js
│   ├── product.model.js
│   └── user.model.js
├── Routers/
│   ├── auth.Router.js
│   ├── cart.Router.js
│   └── produc.Router.js
├── Middleware/
│   └── auth.middleware.js
├── mockData.js
├── server.js
└── README.md


# Installation

Clone the repository: git clone https://github.com/iabhishek-singh/E-Commerce-Application.git


nstall dependencies:

npm install

Start MongoDB (make sure it's running locally on mongodb://localhost:27017)

Run the server:

npm stat

API Endpoints

Auth Routes (/api/auth)

Method | Endpoint | Description

POST | /register | Register a new user
POST | /login | Login and receive a JWT token

Product Routes (/products)

Method | Endpoint | Description

GET | / | Get all products
GET | /:id | Get product by ID


Cart Routes (/cart)

Method | Endpoint | Description

GET | / | Get all cart items
POST | / | Add item to cart
PUT | /:id | Update cart item quantity
DELETE | /:id | Remove item from cart


Authentication
The /register and /login routes return a JWT token.

Include the token in the Authorization header when calling protected routes:

Authorization: <your-token> //tokent is not Provided 







# Route (this is for my own purpose)

get URL: http://localhost:3000/products
get by ID: URL: http://localhost:3000/_id (take from DB)


POST  URL: http://localhost:3000/cart 
---> Product ID("productId") take From MongoDB
body 
{
    "productId":"6801150224f8e09aa14cacd9", 
    "quantity": 5
}
201 created
{
  "product": "6801150224f8e09aa14cacd9", //
  "quantity": 5,
  "_id": "680116db24f8e09aa14cace2",
  "__v": 0
}

get the "carts" items URL : http://localhost:3000/cart

ones the Post is Done then refres the cars DB <-----

PUT :URL : http://localhost:3000/cart/_id
take the id from "carts" MongoDB
"http://localhost:3000/cart/680116db24f8e09aa14cace2"

Update cart item quantity
{
  "quantity": 5
}

Put is Done then no need to refres the cars DB (if you refress then just agin copy th _id then past into the Url) <-----

DELETE : URL :http://localhost:3000/cart/_id
take the id from "carts"
"http://localhost:3000/cart/680116db24f8e09aa14cace2"

 Testing User Registration (POST /register)
 POST URL: http://localhost:3000/api/auth/register
 body
{
  "email": "testuser@example.com",
  "password": "securepassword123"
}
Click on the Send button.

If the registration is successful, you should receive a response with a JWT token. It should look like this:

{
  "token": "your_jwt_token_here"
}

Testing User Login (POST /login)

POST URL: http://localhost:3000/api/auth/login
body
{
  "email": "testuser@example.com",
  "password": "securepassword123"
}
Click on the Send button.

If the login is successful, you should receive a response with a JWT token:

{
  "token": "your_jwt_token_here"
}
