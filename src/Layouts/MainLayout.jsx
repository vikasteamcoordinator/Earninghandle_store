import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;