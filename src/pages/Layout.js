import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
