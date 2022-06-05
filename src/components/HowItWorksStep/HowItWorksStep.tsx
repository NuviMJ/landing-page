import React from 'react';
import './HowItWorksStep.scss'

// @ts-ignore
import slackIcon from '../../assets/img/icons/slack.svg'
// @ts-ignore
import teamsIcon from '../../assets/img/icons/teams.svg'
interface Props {
    title:string;
    des:any;
    img:any;
    opacity?:any;
}
const HowItWorksStep = (prop:Props) => {
    return (
        <div style={{opacity: prop.opacity}} className="HowItWorksStep">
            <div className="HowItWorksStep-contentContainer">
                <div><h3>{prop.title}</h3>
                    <h4>{prop.des}</h4>
                </div>
            </div>
            <div className="HowItWorksStep-imgContainer">
                <img src={prop.img}/>
            </div>
        </div>
    );
};

export default HowItWorksStep;
