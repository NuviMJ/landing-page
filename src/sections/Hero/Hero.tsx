import React from 'react';
import './Hero.scss'

// @ts-ignore
import heroImg from '../../assets/img/hero.png'
// @ts-ignore
import boltLogo from '../../assets/img/companies/boltLogo.png'
// @ts-ignore
import gorgiasLogo from '../../assets/img/companies/gorgiasLogo.png'
// @ts-ignore
import hylandLogo from '../../assets/img/companies/hylandLogo.png'
// @ts-ignore
import meilleursLogo from '../../assets/img/companies/meilleursLogo.png'
// @ts-ignore
import morningLogo from '../../assets/img/companies/morningLogo.png'
// @ts-ignore
import papernestLogo from '../../assets/img/companies/papernestLogo.png'
// @ts-ignore
import qontoLogo from '../../assets/img/companies/qontoLogo.png'
// @ts-ignore
import hecLogo from '../../assets/img/companies/HEC.png'
// @ts-ignore
import coachelloLogo from '../../assets/img/coachello.svg'

const Hero = () => {
    return (
        <div className="Hero">
            <div className="Hero-wrapper">
                <div className="Hero-contentContainer flex flex-col items-start">
                    <h1>High quality personalised coaching solutions</h1>
                    <p>Coachello = coaching for a better world.</p>
                    <a target="_blank" rel="noopener noreferrer"
                       href="https://meetings.hubspot.com/quentin-bouche">
                    <button className="py-3 px-8 bg-black rounded-3xl flex gap-4 border-0 text-white items-center hover:bg-red-900"><img className="w-6 h-6" src={coachelloLogo}/>Try Coachello for Free</button>
                    {/*<button className="Hero-button">See for yourself</button>*/}
                    </a>
                    </div>
                <div className="Hero-imgContainer">
                <img style={{maxWidth:"100%"}} src={heroImg}/>
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
                    <img src={hecLogo}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
