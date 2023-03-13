import React from 'react';
import './Footer.scss'
// @ts-ignore
import coachelloLogo from '../../assets/img/header.svg'
// @ts-ignore
import laFrenchTechLogo from '../../assets/img/La French Tech.png'
// @ts-ignore
import globalCompactLogo from '../../assets/img/globalCompactLogo.png'
import {Link} from "gatsby";

const Footer = () => {
    return (
        <footer className="Footer">
            <div>
                <div className="Footer-logoContainer">
                    <img style={{marginTop: "15px"}} src={coachelloLogo}/>
                    <p>Empower your team with professional <br/> coaching and get strong ROI.<br/> Seamless integration in
                        Slack and
                        <br/>Teams.</p>

                </div>
                <div className="Footer-contentContainer">
                    <h4 style={{marginTop: "15px"}}>HQ</h4>
                    <p>103 Rue du Temple
                        75003 Paris
                        FRANCE</p>
                    <p>Bernard Kochstraat 3-3
                        1075LJ Amsterdam
                        NETHERLANDS</p>
                </div>
                <div className="Footer-contentContainer">
                    <a href="/about"><p>About</p></a>
                    <a href="/privacy-policy"><p>Privacy Policy</p></a>
                    <a href="/terms-and-conditions"><p>Terms & Conditions</p></a>
                    <a href="/coaches"><p>I am a coach</p></a>

                </div>
                <div className="Footer-contentContainer">
                    <a><p>I am an employee</p></a>
                    {/*<a href="/policies"><p>Policies</p></a>*/}
                    <a href="https://meetings.hubspot.com/quentin-bouche/intro-coachello" target="_blank"><p>Speak to an expert</p></a>

                        <a href='/metaverse'>Metaverse</a>

                </div>
                <div className="Footer-imgContainer">
                    <img src={laFrenchTechLogo}/>
                </div>
                <div className="Footer-imgContainer">
                    <img src={globalCompactLogo}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
