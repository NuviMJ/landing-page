import React from 'react';
import './HowItWorks3.scss'
// @ts-ignore
import howItWorks3 from '../../../assets/img/howItWorks3.svg'
// @ts-ignore
import slackIcon from '../../../assets/img/icons/slack.svg'
// @ts-ignore
import teamsIcon from '../../../assets/img/icons/teams.svg'

const HowItWorks3 = () => {
    return (
        <div className="HowItWorks3">
            <div className="HowItWorks3-wrapper">
                <div className="HowItWorks3-topContainer">
                    <p className="h1-red">How it works</p>
                    <div>
                        <h2>Integrated into &nbsp; </h2>
                        <img src={slackIcon}/>
                        <h2>&nbsp;  Slack or&nbsp; </h2>
                        <img src={teamsIcon}/>
                        <h2> &nbsp; MS Teams</h2>
                    </div>
                </div>
                <div className="HowItWorks3-bottomContainer">
                    <div className="HowItWorks3-contentContainer">
                        <div><h3>3. Start 1:1 coaching</h3>
                        <h4>To reach your maximum potential!</h4>
                        </div>
                    </div>
                    <div className="HowItWorks3-imgContainer">
                        <img src={howItWorks3}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks3;
