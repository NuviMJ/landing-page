import React, {useState} from 'react';
import './Navbar.scss'
import {Link} from "gatsby";
// @ts-ignore
import headerIcon from '../../assets/img/header.svg'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isSubNavExpanded, setIsSubNavExpanded] = useState(false)

    return (
        <header className="Navbar">
            <div className="Navbar-wrapper">
                <div>
                    <div className="Navbar-logoContainer">
                        <Link to='/'> <img src={headerIcon}/></Link>
                    </div>
                    <a type="button" className={
                                         isNavExpanded ? "Navbar-toggle  navbar-toggler" : "Navbar-toggle collapsed Navbar-toggle navbar-toggler"
                                     }   onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </a>
                    <div className={
                        isNavExpanded ? "Navbar-navWrapper expanded" : "Navbar-navWrapper"
                    }>
                        <nav>
                            <ul>
                                <li onMouseOver={() => {
                                    setIsSubNavExpanded(true)
                                }} onMouseLeave={() => {
                                    setIsSubNavExpanded(false)
                                }} className="Navbar-menuContainer">
                                    {/*<Link to=''>*/}
                                    Our Solutions <span aria-hidden="true">&#x25be;</span>
                                    {/*</Link>*/}
                                    <ul className={
                                        isSubNavExpanded ? "Navbar-subExpanded Navbar-subMenu" : "Navbar-subCollapsed Navbar-subMenu"
                                    }>
                                        <li>
                                            <Link to='/on-demand'>On Demand</Link>
                                        </li>
                                        <li>
                                            <Link to='/leadership'>Leadership</Link>
                                        </li>
                                        <li>
                                            <Link to='/workshops'>Workshops</Link>
                                        </li>
                                        <li>
                                            <Link to='/metaverse'>Metaverse</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <Link to='/coaches'>
                                        Our Coaches
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/about'>
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/case-studies'>
                                        Case Studies
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/thought-leadership'>
                                        Thought Leadership
                                    </Link>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"
                                       href="https://meetings.hubspot.com/quentin-bouche">
                                        <button className="Navbar-button">Request a Demo</button>
                                    </a>
                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <hr/>
            </div>

        </header>
    );
};

export default Navbar;
