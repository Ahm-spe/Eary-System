
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
export const routes = createBrowserRouter([
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
        path: "Update",
        element: <AppUpdate/>,
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