import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './componants/Error-page/ErrorPage.jsx';
import ProductDetails from './componants/Product-Details/ProductDetails.jsx';
import Layout from './Layout.jsx';
import { store } from './store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  [{
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {

        path: "product-details/:product_id",
        element: <ProductDetails />
      },

    ],

    errorElement: <ErrorPage />
  },
  ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


