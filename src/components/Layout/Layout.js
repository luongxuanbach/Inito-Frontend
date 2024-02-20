import { Outlet } from "react-router-dom";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* display the child prop */}
      {/* <main>{children}</main> */}
      <Main>{children}</Main>
      <Outlet/>
    </>
  );
};

export default Layout;
