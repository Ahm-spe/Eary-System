import { Outlet } from "react-router-dom";
import { AppHeader } from "./components/User/Header/Header";
export const App = () => {
  return (
    <>
    <AppHeader />
      <Outlet />
    </>
  );
};
