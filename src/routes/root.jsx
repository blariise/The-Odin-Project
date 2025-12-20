import { Outlet } from "react-router";

import Navbar from "./../components/navbar.jsx";

export default function Root() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  ); 
}

