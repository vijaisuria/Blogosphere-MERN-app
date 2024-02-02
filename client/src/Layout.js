import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  const isIndexPage = location.pathname === "/";

  const mainClass = isIndexPage ? "main-full-width" : "main-normal-width";

  return (
    <>
      <Navbar />
      <main className={mainClass}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
