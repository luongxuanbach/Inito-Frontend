import { Outlet, Link } from "react-router-dom";
import Header from "../layouts/Header";

const Layout = () => {
  return (
    <>
    <Header/>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/stories">Stories</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;