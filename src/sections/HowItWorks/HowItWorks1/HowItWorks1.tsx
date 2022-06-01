import React from 'react';
import './HowItWorks1.scss'
// @ts-ignore
import howItWorks1Img from '../../../assets/img/howItWorks1.svg'
// @ts-ignore
import slackIcon from '../../../assets/img/icons/slack.svg'
// @ts-ignore
import teamsIcon from '../../../assets/img/icons/teams.svg'

const HowItWorks1 = () => {
    return (
        <div className="HowItWorks1">
            <div className="HowItWorks1-wrapper">
                <div className="HowItWorks1-topContainer">
                    <p className="h1-red">How it works</p>
                    <div>
                        <h2>Integrated into &nbsp; </h2>
                        <img src={slackIcon}/>
                        <h2>&nbsp;  Slack or&nbsp; </h2>
                        <img src={teamsIcon}/>
                        <h2> &nbsp; MS Teams</h2>
                    </div>
                </div>
                <div className="HowItWorks1-bottomContainer">
                    <div className="HowItWorks1-contentContainer">
                        <div><h3>1. Assessment</h3>
                        <h4>Assess your strengths and challenges</h4>
                        </div>
                    </div>
                    <div className="HowItWorks1-imgContainer">
                        <img src={howItWorks1Img}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks1;
