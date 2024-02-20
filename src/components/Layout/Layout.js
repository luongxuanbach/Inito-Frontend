import { Outlet } from "react-router-dom";
import Header from "../../layouts/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* display the child prop */}
      <main>{children}</main>
      <Outlet/>
    </>
  );
};

export default Layout;
