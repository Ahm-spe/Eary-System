import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router';
=======
import { MyForm } from './components/HomePage/login';
import { MyForm2 } from './components/HomePage/register';
import{Account, Manage} from'./components/Admin/ManageAccounts';
import{AddAccount} from'./components/Admin/addaccount';
import{Home} from  './components/Admin/Home';
import{AddExam} from './components/Admin/AddExam';
import{AppExams} from './components/User/Exams/Exams';
import{History} from './components/User/History/History';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AppUpdate } from './components/User/Update/Update';
import { Dashboard } from './components/Admin/HomePage';
import { Quizzes } from './components/Admin/Quizzes/Quizzes';


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
    path: "ManageAccounts",
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
    element: <Dashboard/>,
  },
  {
    path: "addexam",
    element: <AddExam/>,
  },
    {
    path: "Exams",
    element: <AppExams/>,
  },
  {
    path: "history",
    element: <History/>,
  },
  {
    path: "Update",
    element: <AppUpdate/>,
  },
  {
    path: "/d",
    element: <Dashboard/>,
  },
  {
    path: "quizzes",
    element: <Quizzes/>,
  },
]);
>>>>>>> b15afe94b16c4129815f0aafa6f6c3c08e8640ef


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);
