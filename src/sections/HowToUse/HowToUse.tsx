import React from 'react';
import './HowToUse.scss'
import VideoCard from "../../components/VideoCard/VideoCard";
// @ts-ignore
import benefitImg from '../../assets/img/benifit.png'
// @ts-ignore
import LDImg from '../../assets/img/leadership.png'
// @ts-ignore
import WorkshopImg from '../../assets/img/workshop.png'
// @ts-ignore
import sustainableImg from '../../assets/img/sustainable.png'

import HowToUseCard from "../../components/HowToUseCard/HowToUseCard";

const HowToUse = () => {
    return (
        <div className="HowToUse">
            <div className="HowToUse-wrapper">
                <h2>How companies use Coachello?</h2>
                <div className="HowToUse-cardContainer flex-col  lg:flex-row mt-5">
                    <HowToUseCard icon={benefitImg} header={"Coaching as a benefit"} des={"On-demand 1:1 coaching sessions whenever your talents need it"}/>
                    <HowToUseCard icon={LDImg} header={"Leadership coaching"} des={"1:1 coaching sessions for identified leaders integrated into your L&D strategy\n"}/>
                    <HowToUseCard icon={WorkshopImg} header={"Group workshops"} des={"Group coaching, co-development, mediation, DiSC, soft-skills training "}/>
                    <HowToUseCard icon={sustainableImg} header={"Sustainable transformations"} des={"Empowering efficient behavioural change"}/>
                </div>
            </div>
        </div>
    );
};

export default HowToUse;
