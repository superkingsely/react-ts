import React from "react";
import Home from "./Home/Home";
import { Link, Route, Routes } from "react-router-dom";
import Additem from "./Create/Additem";
import Layout from "../Layout/Layout";
import Details from "./Detailpage/Details";

const Main = () => {
  return (
    <Layout>
      <main>
        <Routes>
          {/* pages */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Additem />} />
          <Route path="/blogs/:id" element={<Details />} />
          <Route path="*" element={ <div>Page not found <Link to={'/'}>Back home</Link></div> } />
        </Routes>
      </main>
    </Layout>
  );
};

export default Main;
