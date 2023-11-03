import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import { useEffect } from 'react';

const App = () => {

  
  let routers=createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {index:true,element:<Home/>},
    ]}
  ])
  return <>
  <RouterProvider router={routers}>
  
  </RouterProvider>
  {/* {showbtn&& (

    <button  className=' duration-700 leading-4   bg-yellow-400 px-3 py-2 fixed right-2 bottom-2 rounded-full'>
  <i class="fa-solid fa-circle-chevron-up text-xl"></i>
  </button>
    )} */}
  </>
};

export default App;