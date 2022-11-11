import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './pages/MainPage/MainPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from './pages/LoginPage/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
