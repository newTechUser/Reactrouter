import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
}   from "react-router-dom"; 
  import Home from './pages/Home';
  import About from './pages/About';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />, 
    },
    {
        path: "/About",
        element: <About />,
      },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
); 
  
