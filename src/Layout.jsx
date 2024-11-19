import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarSimple } from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <NavbarSimple />
      <Outlet />
    </>
  );
};

export default Layout;
