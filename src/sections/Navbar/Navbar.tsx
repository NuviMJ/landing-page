import React, {useState} from 'react';
import './Navbar.scss'
import {Link} from "gatsby";
// @ts-ignore
import headerIcon from '../../assets/img/header.svg'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <header className="Navbar">
            <div className="Navbar-wrapper">
                <div>
                    <div className="Navbar-logoContainer">
                        <img src={headerIcon}/>
                    </div>
                    <button className="Navbar-toggle" onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}>
                        <svg height="20px" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
                        </svg>
                    </button>
                    <div className={
                        isNavExpanded ? "Navbar-navWrapper expanded" : "Navbar-navWrapper"
                    }>
                        <nav>
                            <ul>
                                <li>
                                    <Link to=''>
                                        Our Solutions
                                    </Link>
                                </li>

                                <li>
                                    <Link to=''>
                                        Our Coaches
                                    </Link>
                                </li>

                                <li>
                                    <Link to=''>
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link to=''>
                                        Case Studies
                                    </Link>
                                </li>

                                <li>
                                    <Link to=''>
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
