import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyForm } from './components/HomePage/login';
import { MyForm2 } from './components/HomePage/register';
import{Account} from'./components/Admin/ManageAccounts';
import{AddAccount} from'./components/Admin/addaccount';
import{Home} from  './components/Admin/Home';
import {Nav} from './components/Admin/Nav';
import{AddExam} from './components/Admin/AddExam';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MyForm/>,
  },
  {
    path: "register",
    element: <MyForm2/>,
  },
  {
    path: "manageaccounts",
    element: <Account/>,
  },
  {
    path: "addaccount",
    element: <AddAccount/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "nav",
    element: <Nav/>,
  },
  {
    path: "addexam",
    element: <AddExam/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
