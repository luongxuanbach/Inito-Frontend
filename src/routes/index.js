// AppRouter.js
import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Stories from "../pages/Stories";
import Blog from "../pages/Blog";
import Layout from "../components/Layout/Layout";
import FAQ from "../pages/FAQ";

const Router = () => {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
};

export default Router;
