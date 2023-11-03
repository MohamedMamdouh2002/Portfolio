import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
const App = () => {

  
  let routers=createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {index:true,element:<Home/>},
    ]}
  ])
  return <>
  <RouterProvider router={routers}>
  
  </RouterProvider>
  
  </>
};

export default App;