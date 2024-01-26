// AppRouter.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Stories from "../pages/Stories";
import Blog from "../pages/Blog";
import Layout from "../pages/Layout";
import FAQ from "../pages/FAQ";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/stories" component={Stories} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/blogs" component={Blog} />
          <Route path="/faq" component={FAQ} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
