import React from 'react';
import './HowItWorks2.scss'
// @ts-ignore
import howItWorks2 from '../../../assets/img/howItWork2.svg'
// @ts-ignore
import slackIcon from '../../../assets/img/icons/slack.svg'
// @ts-ignore
import teamsIcon from '../../../assets/img/icons/teams.svg'

const HowItWorks2 = () => {
    return (
        <div className="HowItWorks2">
            <div className="HowItWorks2-wrapper">
                <div className="HowItWorks2-topContainer">
                    <p className="h1-red">How it works</p>
                    <div>
                        <h2>Integrated into &nbsp; </h2>
                        <img src={slackIcon}/>
                        <h2>&nbsp;  Slack or&nbsp; </h2>
                        <img src={teamsIcon}/>
                        <h2> &nbsp; MS Teams</h2>
                    </div>
                </div>
                <div className="HowItWorks2-bottomContainer">
                    <div className="HowItWorks2-contentContainer">
                        <div><h3>2. Choose your coach</h3>
                        <h4>Based on their personality, professional<br/> experience and languages</h4>
                        </div>
                    </div>
                    <div className="HowItWorks2-imgContainer">
                        <img src={howItWorks2}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks2;
