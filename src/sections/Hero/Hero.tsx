import React from 'react';
import './Hero.scss'

// @ts-ignore
import heroImg from '../../assets/img/Hero.svg'
// @ts-ignore
import boltLogo from '../../assets/img/companies/boltLogo.svg'
// @ts-ignore
import gorgiasLogo from '../../assets/img/companies/gorgiasLogo.svg'
// @ts-ignore
import hylandLogo from '../../assets/img/companies/hylandLogo.svg'
// @ts-ignore
import meilleursLogo from '../../assets/img/companies/meilleursLogo.png'
// @ts-ignore
import morningLogo from '../../assets/img/companies/morningLogo.svg'
// @ts-ignore
import papernestLogo from '../../assets/img/companies/papernestLogo.svg'
// @ts-ignore
import qontoLogo from '../../assets/img/companies/qontoLogo.svg'
// @ts-ignore
import keplerLogo from '../../assets/img/companies/keplerLogo.png'

const Hero = () => {
    return (
        <div className="Hero">
            <div className="Hero-wrapper">
                <div className="Hero-contentContainer">
                    <h1>High quality personalised coaching solutions</h1>
                    <p>From group workshops to individual coaching, we are here to give you an amazing
                        experience.</p>
                    <a target="_blank" rel="noopener noreferrer"
                       href="https://meetings.hubspot.com/quentin-bouche">
                    <button className="Hero-button">Discuss Your Project Today!</button>
                    </a>
                    </div>
                <div className="Hero-imgContainer">
                <img src={heroImg}/>
            </div>
            </div>
            <div className="Hero-companyLogoWrapper">
                <div>
                    <img src={boltLogo}/>
                </div>
               <div>
                    <img src={gorgiasLogo}/>
                </div>
               <div>
                    <img src={hylandLogo}/>
                </div>
               <div>
                    <img src={meilleursLogo}/>
                </div>
               <div>
                    <img src={morningLogo}/>
                </div>
               <div>
                    <img src={papernestLogo}/>
                </div>
               <div>
                    <img src={qontoLogo}/>
                </div>
               <div>
                    <img src={keplerLogo}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
