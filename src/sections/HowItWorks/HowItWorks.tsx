import React from 'react';
import './HowItWorks.scss'
// @ts-ignore
import slackImg from '../../assets/img/slackUI.svg'
// @ts-ignore
import slackIcon from '../../assets/img/icons/slack.svg'
// @ts-ignore
import teamsIcon from '../../assets/img/icons/teams.svg'
import ScrollSlider from "../../components/ScrollSlider/ScrollSlider";
import HowItWorks1 from "./HowItWorks1/HowItWorks1";
import HowItWorks2 from "./HowItWorks2/HowItWorks2";
import HowItWorks3 from "./HowItWorks3/HowItWorks3";
import {StepsProvider} from "react-step-builder";

const HowItWorks = () => {
    return (
        <div className="HowItWorks">
            <StepsProvider>
                <ScrollSlider>
                    <HowItWorks1/>
                    <HowItWorks2/>
                    <HowItWorks3/>
                </ScrollSlider>
            </StepsProvider>
        </div>
    );
};

export default HowItWorks;
