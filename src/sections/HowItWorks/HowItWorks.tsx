import React from 'react';
import './HowItWorks.scss'

import ScrollSlider from "../../components/ScrollSlider/ScrollSlider";
import HowItWorks1 from "./HowItWorks1/HowItWorks1";
import HowItWorks2 from "./HowItWorks2/HowItWorks2";
import HowItWorks3 from "./HowItWorks3/HowItWorks3";
import {StepsProvider} from "react-step-builder";
import {useIntersection} from "../../hooks/useIntersection";
import {useScrollEffect} from "../../hooks/useScrollEffect";
import './HowItWorks1/HowItWorks1.scss'
// @ts-ignore
import howItWorks1Img from '../../assets/img/howItWorks1.svg'
// @ts-ignore
import howItWork2Img from '../../assets/img/howItWork2.svg'
// @ts-ignore
import howItWork3sImg from '../../assets/img/howItWorks3.svg'
// @ts-ignore
import slackIcon from '../../assets/img/icons/slack.svg'
// @ts-ignore
import teamsIcon from '../../assets/img/icons/teams.svg'

const HowItWorks = () => {
    // const [containerRef, isVisible] = useIntersection({
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0.9
    // })
    const [opacity, isTop, scrolling, ref] = useScrollEffect()
    // console.log(opacity, isTop, scrolling)
    let style: any;
    let styleSub: any;
    if (isTop) {
        style = {
            paddingBottom: "400vh",
            paddingTop: "0px"
        }
        styleSub = {
            top: "0"
        }
    } else {
        style = {
            paddingTop: "400vh",
            paddingBottom: "0px"
        }
        styleSub = {
            bottom: "0"
        }
    }

    return (
        <div className="HowItWorksContainer">
            <div className="HowItWorksContainer-wrapper">
                <div className="HowItWorksContainer-topContainer">
                    <p className="h1-red">How it works</p>
                    <div>
                        <h2>Integrated into &nbsp; </h2>
                        <img src={slackIcon}/>
                        <h2>&nbsp;  Slack or&nbsp; </h2>
                        <img src={teamsIcon}/>
                        <h2> &nbsp; MS Teams</h2>
                    </div>
                </div>

                <div style={style} ref={ref} className="HowItWorks">
                    <div style={styleSub} className={scrolling ? "HowItWorks-startEffect" : undefined}>
                        <div>
                            {/*    <div>*/}
                            <HowItWorks1 opacity={opacity.op1}
                                title="1. Assessment"
                                des="Assess your strengths and challenges"
                                img={howItWorks1Img}/>
                            <HowItWorks1 opacity={opacity.op2}
                                title="2. Choose your coach"
                                des={<>Based on their personality, professional<br/> experience and languages</>}
                                img={howItWork2Img}/>
                            <HowItWorks1 opacity={opacity.op3}
                                title="3. Start 1:1 coaching"
                                des="To reach your maximum potential!"
                                img={howItWork3sImg}/>
                            {/*<div className="HowItWorks1">*/}
                            {/*    <div className="HowItWorks1-contentContainer">*/}
                            {/*        <div><h3>1. Assessment</h3>*/}
                            {/*            <h4>Assess your strengths and challenges</h4>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="HowItWorks1-imgContainer">*/}
                            {/*        <img src={howItWorks1Img}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<HowItWorks2/>*/}
                            {/*<HowItWorks3/>*/}
                            {/*    </div>*/}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;
