import React from 'react';
import './HowItWorks.scss'
// @ts-ignore
import slackImg from '../../assets/img/slackUI.svg'
// @ts-ignore
import slackIcon from '../../assets/img/icons/slack.svg'
// @ts-ignore
import teamsIcon from '../../assets/img/icons/teams.svg'

const HowItWorks = () => {
    return (
        <div className="HowItWorks">
            <div className="HowItWorks-wrapper">
                <div className="HowItWorks-topContainer">
                    <p className="h1-red">How it works</p>
                    <div>
                        <h2>Integrated into &nbsp; </h2>
                        <img src={slackIcon}/>
                        <h2>&nbsp;  Slack or&nbsp; </h2>
                        <img src={teamsIcon}/>
                        <h2> &nbsp; MS Teams</h2>
                    </div>
                </div>
                <div className="HowItWorks-bottomContainer">
                    <div className="HowItWorks-contentContainer">
                        <div><h3>1. Assessment</h3>
                        <h4>Assess your strengths and challenges</h4>
                        </div>
                    </div>
                    <div className="HowItWorks-imgContainer">
                        <img src={slackImg}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
