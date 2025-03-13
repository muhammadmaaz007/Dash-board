import React from "react";
import PrimarySearchAppBar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <div className="flex ">
        <div className=" mt-24 ml-8">
          <SideBar />
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
