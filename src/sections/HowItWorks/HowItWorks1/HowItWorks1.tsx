import React from 'react';
import './HowItWorks1.scss'
// @ts-ignore
import howItWorks1Img from '../../../assets/img/howItWorks1.svg'
// @ts-ignore
import slackIcon from '../../../assets/img/icons/slack.svg'
// @ts-ignore
import teamsIcon from '../../../assets/img/icons/teams.svg'
interface Props {
    title:string;
    des:any;
    img:any;
    opacity?:any;
}
const HowItWorks1 = (prop:Props) => {
    return (
        <div style={{opacity: prop.opacity}} className="HowItWorks1">
            <div className="HowItWorks1-contentContainer">
                <div><h3>{prop.title}</h3>
                    <h4>{prop.des}</h4>
                </div>
            </div>
            <div className="HowItWorks1-imgContainer">
                <img src={prop.img}/>
            </div>
        </div>
    );
};

export default HowItWorks1;
