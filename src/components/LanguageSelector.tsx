import React from "react";
import { Link, navigate } from "gatsby";
import { useLocation } from "@reach/router";

const LanguageSelector: React.FC = () => {
  const location = useLocation();
  const languages = ["en", "fr"];
  const currentPath = location.pathname;
  const newPath = currentPath.startsWith(`/${"fr"}/`)
    ? currentPath.replace(`/${"fr"}/`, "/")
    : `/fr${currentPath}`;

  return (
    <div className="flex gap-1 rounded ">
      <Link
        key={1}
        to={newPath}
        className={`${
          !currentPath.startsWith(`/${"fr"}/`)
            ? "pointer-events-none text-gray"
            : "cursor-pointer text-black"
        } bg-white border border-gray/20 p-2 rounded hover:bg-warm`}
      >
        EN
      </Link>

      <Link
        key={2}
        to={newPath}
        className={`${
          currentPath.startsWith(`/${"fr"}/`)
            ? "pointer-events-none text-gray"
            : "cursor-pointer text-black"
        } bg-white border border-gray/20 p-2 rounded hover:bg-warm`}
      >
        FR
      </Link>
    </div>
  );
};

export default LanguageSelector;
