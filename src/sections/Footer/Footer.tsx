import React from 'react';
import './Footer.scss'
// @ts-ignore
import coachelloLogo from '../../assets/img/header.svg'
// @ts-ignore
import laFrenchTechLogo from '../../assets/img/la+french+tech.svg'

const Footer = () => {
    return (
        <footer className="Footer">
            <div>
                <div className="Footer-logoContainer">
                    <img src={coachelloLogo}/>
                    <p>Empower your team with career <br/> coaching and get strong ROI.<br/> Seamless integration in Slack and
                        <br/>Teams.</p>

                </div>
                <div className="Footer-contentContainer">
                    <h4>HQ</h4>
                    <p>103 Rue du Temple
                        75003 Paris
                        FRANCE</p>
                    <p>Bernard Kochstraat 3-3
                        1075LJ Amsterdam
                        NETHERLANDS</p>
                </div>
                <div className="Footer-contentContainer">
                    <a><p>About</p></a>
                    <a><p>Privacy Policy</p></a>
                    <a><p>Terms & Conditions</p></a>
                    <a><p>I am a coach</p></a>

                </div>
                <div className="Footer-contentContainer">
                    <a><p>I am an employee</p></a>
                    <a><p>Policies</p></a>
                    <a><p>Speak to an expert</p></a>

                </div>
                <div className="Footer-imgContainer">
                    <img src={laFrenchTechLogo}/>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
