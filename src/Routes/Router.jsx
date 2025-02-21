import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import Homepage from '../Pages/Homepage';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage></Homepage>,
      
    },
    {
      path: "login",
      element: <Login></Login>
    }

  ]);

export default Router;