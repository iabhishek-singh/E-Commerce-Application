import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// lazy loading 

const Checkout = lazy(() => import("./components/CheckOut.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"))
// const ProductList = lazy(() => import("./components/ProductList"))
const ProductDetail = lazy(() => import("./components/ProductDetail"))
// import Checkout from './components/CheckOut.jsx';
// import Cart from "./components/Cart.jsx"
import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
import { NotFound } from './components/NotFound.jsx';




//Create Routing Configurtion

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", //  This means default child route ("/")
        element: <ProductList />,
      },
      {
        path: '/cart',
        element: <Suspense fallback={<div> Loading.... </div>}>
          <Cart />
        </Suspense>
      },
      {
        path: "product/:id",
        element: <Suspense fallback={<div> Loading.... </div>}>
          <ProductDetail />
        </Suspense>
      },
      {
        path: '/checkout',
        element: <Suspense fallback={<div> Loading.... </div>}>
          <Checkout />
        </ Suspense>
      },

    ],
    errorElement: <NotFound />,
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
