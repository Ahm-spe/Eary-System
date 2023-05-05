
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { MyForm } from './components/HomePage/login';
import { MyForm2 } from './components/HomePage/register';
import{Account} from'./components/Admin/ManageAccounts';
import{AddAccount} from'./components/Admin/addaccount';
import { AppExams } from "./components/User/Exams/Exams";
import { AppUpdate } from "./components/User/Update/Update";
import { History } from "./components/User/History/History";
import { AppHeader } from "./components/User/Header/Header";
import { Dashboard } from './components/Admin/HomePage';
/*import { Quizzes } from './components/Admin/Quizzes/Quizzes';*/
import{Home} from  './components/Admin/Home';
import{AddExam} from './components/Admin/AddExam';
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MyForm/>,
      },
      {
        path: "/register",
        element: <MyForm2/>,
      },
      {
        path: "/manageaccounts",
        element: <Account/>,
      },
      {
        path: "/addaccount",
        element: <AddAccount/>,
      },
      {
        path: "/addexam",
        element: <AddExam/>,
      },
      {
        path: "/d",
        element: <Dashboard/>,
      },
     /* {
        path: "quizzes",
        element: <Quizzes/>,
      },
      */
      
      {
        path: "/Home-Admin",
        element: <Home/>,
      },
      {
        path: "/nav",
        element: <Dashboard/>,
      },
  {
    path: "/User",
    element: <App />,
    children: [
      {
        path: "/User",
        element: <AppExams />,
      },
      
      {
        path: "/User/Update",
        element: <AppUpdate />,
      },
      {
        path: "/User/History",
        element: <History />,
      },
      
      
    ],
  },
  
]);