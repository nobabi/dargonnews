import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../pages/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element:<Navigate to={"/category/01"}> </Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: async ({ params }) => {
          const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`);
            console.log("araf",response);
          if (!response.ok) {
            throw new Error('Failed to fetch category data');
          }
          const data = await response.json();
        
          return data;
        },
      },
    ],
  },
  {
    path: "/news",
    element: <div>News world!</div>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
     {
      path: "/auth/login",
      element: <h2>Login</h2>,
     },
     {
      path: "/auth/register",
      element: <h2>Register</h2>,
     },
    ]
  },
  {
    path: "*",
    element: <div>Error world!</div>,
  },
]);

export default router;
