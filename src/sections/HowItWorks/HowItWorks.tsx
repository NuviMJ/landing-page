import React from 'react';
import './HowItWorks.scss'


import HowItWorksStep from "../../components/HowItWorksStep/HowItWorksStep";

import {useScrollEffect} from "../../hooks/useScrollEffect";

// @ts-ignore
import howItWorks1Img from '../../assets/img/scroll1.png'
// @ts-ignore
import howItWorks2Img from '../../assets/img/scroll2.png'
// @ts-ignore
import howItWorks3Img from '../../assets/img/scroll3.png'
// @ts-ignore
import frameImg from '../../assets/img/frame.png'
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
    // let isSmall = window.matchMedia('(max-width: 600px)').matches;
    // console.log(isSmall)
    // console.log(opacity, isTop, scrolling)
    let style: any;
    let styleSub: any;
    if (isTop) {
        style = {
            paddingBottom: "300vh",
            paddingTop: "0px"
        }
        styleSub = {
            top: "0"
        }
    } else {
        style = {
            paddingTop: "300vh",
            paddingBottom: "0px"
        }
        styleSub = {
            bottom: "0"
        }
    }
    if(scrolling){
        const element = document.getElementById('#navbar')
        if (element) element.style.opacity = '0';

    }else{

        const element = document.getElementById('#navbar')
        if (element)  element.style.opacity = '1';
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
                            <HowItWorksStep opacity={opacity.op1}
                                            title="1. Assessment"
                                            des="Assess your strengths and challenges"
                                            img={howItWorks1Img}/>
                            <HowItWorksStep opacity={opacity.op2}
                                            title="2. Choose your coach"
                                            des={<>Based on their personality, professional<br/> experience and
                                                languages</>}
                                            img={howItWorks2Img}/>
                            <HowItWorksStep opacity={opacity.op3}
                                            title="3. Start 1:1 coaching"
                                            des="To reach your maximum potential!"
                                            img={howItWorks3Img}/>
                            <HowItWorksStep opacity={1}
                                            title=" "
                                            des=" "
                                            img={frameImg}/>
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
