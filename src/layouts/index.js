import React from "react";
import Navbar from "../sections/Navbar/Navbar";
import Footer from "../sections/Footer";
import LanguageSelector from "../components/LanguageSelector";
import useLocale from "../hooks/useLocale";
import NavbarFr from "../sections/Navbar/NavbarFr";
import FooterFr from "../sections/FooterFr";

const Layout = ({ children }) => {
  const locale = useLocale();
  return (
    <div className="relative">
      {locale === "fr" ? <NavbarFr /> : <Navbar />}
      {children}
      {locale === "fr" ? <FooterFr /> : <Footer />}
      <div className="fixed bottom-6 right-6">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Layout;
