import React from "react";
import { useLocation } from "@reach/router";

const useLocale = () => {
  const location = useLocation();
  const languages = ["en", "fr"];
  const currentPath = location.pathname;
  return currentPath.startsWith(`/${"fr"}/`) ? "fr" : "en";
};

export default useLocale;
