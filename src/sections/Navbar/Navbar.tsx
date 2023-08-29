import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "gatsby";
// @ts-ignore
import headerIcon from "../../assets/img/old/header.svg";
import { useIsTop } from "../../hooks/useNavStatus";
import useLocale from "../../hooks/useLocale";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isSubNavExpanded, setIsSubNavExpanded] = useState(false);
  const [prefix, setPrefix] = useState("");
  const [isSubCaseExpanded, setIsSubCaseExpanded] = useState(false);
  const isTop = useIsTop();
  const locale = useLocale();
  useEffect(() => {
    setPrefix(locale == "fr" ? "/fr" : "");
  }, [locale]);
  return (
    <header
      id="#navbar"
      className={"Navbar " + (!isTop ? "Navbar-sticky" : "")}
    >
      <div className="Navbar-wrapper">
        <div>
          <div className="Navbar-logoContainer">
            <Link to={`${prefix}/`}>
              {" "}
              <img src={headerIcon} />
            </Link>
          </div>
          <a
            type="button"
            className={
              isNavExpanded
                ? "Navbar-toggle  navbar-toggler"
                : "Navbar-toggle collapsed Navbar-toggle navbar-toggler"
            }
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <span> </span>
            <span> </span>
            <span> </span>
          </a>
          <div
            className={
              // style={  (!isTop) ? ({top: '36px'}):({top: '48px'})  }
              isNavExpanded ? "Navbar-navWrapper expanded" : "Navbar-navWrapper"
            }
          >
            <nav>
              <ul>
                <li
                  onMouseOver={() => {
                    setIsSubNavExpanded(true);
                  }}
                  onMouseLeave={() => {
                    setIsSubNavExpanded(false);
                  }}
                  className="Navbar-menuContainer"
                >
                  {/*<Link to=''>*/}
                  Solutions <span aria-hidden="true">&#x25be;</span>
                  {/*</Link>*/}
                  <ul
                    className={
                      isSubNavExpanded
                        ? "Navbar-subExpanded Navbar-subMenu"
                        : "Navbar-subCollapsed Navbar-subMenu" + ""
                    }
                  >
                    <li>
                      <Link to={`${prefix}/individual-coaching`}>
                        Individual-coaching
                      </Link>
                    </li>
                    <li>
                      <Link to={`${prefix}/internal-coaching`}>
                        Internal-coaching
                      </Link>
                    </li>
                    <li>
                      <Link to={`${prefix}/executive-coaching`}>
                        Executive-coaching
                      </Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to='/metaverse'>Metaverse</Link>*/}
                    {/*</li>*/}
                    <li>
                      <Link to={`${prefix}/group-workshop`}>
                        Group Workshop
                      </Link>
                    </li>
                    {/*<li>*/}
                    {/*  <Link to={`${prefix}/climate-coaching`}>*/}
                    {/*    Climate Coaching*/}
                    {/*  </Link>*/}
                    {/*</li>*/}
                  </ul>
                </li>

                <li>
                  <Link to={`${prefix}/coaches`}>Coaches</Link>
                </li>
                <li>
                  <Link to={`${prefix}/methodology`}>Methodology</Link>
                </li>

                <li>
                  <Link to={`${prefix}/about`}>About Us</Link>
                </li>

                {/*<li>*/}
                {/*    <Link to='/case-studies'>*/}
                {/*        Case Studies*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li*/}
                {/*  onMouseOver={() => {*/}
                {/*    setIsSubCaseExpanded(true);*/}
                {/*  }}*/}
                {/*  onMouseLeave={() => {*/}
                {/*    setIsSubCaseExpanded(false);*/}
                {/*  }}*/}
                {/*  className=" Navbar-menuContainer"*/}
                {/*  style={{ opacity: "1" }}*/}
                {/*>*/}
                {/*  <Link to="/case-studies">*/}
                {/*    Case Studies <span aria-hidden="true">&#x25be;</span>*/}
                {/*  </Link>*/}
                {/*  <ul*/}
                {/*    className={*/}
                {/*      isSubCaseExpanded*/}
                {/*        ? "Navbar-subExpanded Navbar-subMenu"*/}
                {/*        : "Navbar-subCollapsed Navbar-subMenu"*/}
                {/*    }*/}
                {/*  >*/}
                {/*    <li>*/}
                {/*      <Link to="/meilleurs-agents">Meilleurs Agents</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*      <Link to="/gorgias">Gorgias</Link>*/}
                {/*    </li>*/}
                {/*  </ul>*/}
                {/*</li>*/}
                <li>
                  <Link to={`${prefix}/thought-leadership`}>
                    Thought Leadership
                  </Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://dashbord.coachello.io"
                  >
                    <button className="Navbar-button">Access Dashboard</button>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*<hr />*/}
      </div>
    </header>
  );
};

export default Navbar;
