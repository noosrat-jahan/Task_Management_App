import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import Homepage from '../Pages/Homepage';
import Errorpage from '../Pages/Errorpage';
import AllTasks from '../Pages/AllTasks';
import MainSection from '../Pages/MainSection';
import Edittask from '../Pages/Edittask';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage></Homepage>,
      children: [
        {
          path: "/",
          element: <MainSection></MainSection>
        },
        {
          path: "alltasks",
          element: <AllTasks></AllTasks>
        },
        {
          path: "edittask/:id",
          element: <Edittask></Edittask>
        },
      ]
      
    },
    {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "*",
      element: <Errorpage></Errorpage>
    }

  ]);

export default Router;