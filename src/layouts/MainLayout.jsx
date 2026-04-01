// import React from 'react';

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar></Navbar>
      {location.pathname == "/" && (
        <div className="max-w-[1600px] mx-auto px-5">
          <Banner />
        </div>
      )}
      <div className="min-h-screen max-w-7xl mx-auto px-5 pt-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
