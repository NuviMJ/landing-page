import React from "react";
import Navbar from "../sections/Navbar/Navbar";
import Footer from "../sections/Footer";
import LanguageSelector from "../components/LanguageSelector";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar /> {children} <Footer />
      <div className="fixed bottom-6 right-6">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Layout;
