import React, {ReactChildren, ReactElement, useEffect, useRef, useState} from "react";
import {useIntersection} from "../../hooks/useIntersection";
import {Steps, StepsProvider, useSteps} from "react-step-builder";
import HowItWorks from "../../sections/HowItWorks/HowItWorks";

const ScrollSlider = ({children}: { children:ReactElement[] }) => {
    //
    const [containerRef, inViewport] = useIntersection(
        {root: null, rootMargin: "300px", threshold: 1.0});
    const {jump, current} = useSteps()
    // https://erikmartinjordan.com/detect-current-section-scroll-javascript
    // let onPoint = false;
    // useEffect(() => {
    //     let scrollCount = 1;
    //     const onScroll = (e: any) => {
    //         if (e.wheelDelta < 0) {
    //             scrollCount++;
    //             if (scrollCount >= 10) {
    //                 document.body.style.overflowY = 'scroll'
    //                 scrollCount = 0;
    //             }
    //         } else if (e.wheelDelta > 0) {
    //             scrollCount--;
    //             if (scrollCount <= -10) {
    //                 document.body.style.overflowY = 'scroll'
    //                 scrollCount = 0;
    //             }
    //         }
    //         let step = Math.floor(scrollCount / 3)
    //         if (current != step && step != 0) {
    //             if (step == -1) {
    //                 step = 3;
    //             } else if (step == -2) {
    //                 step = 2
    //             } else if (step == -3) {
    //                 step = 1
    //             }
    //             jump(step)
    //             console.log('step : ', step);
    //         }
    //         console.log(scrollCount)
    //     };
    //     if (onPoint) window.addEventListener("wheel", onScroll);
    //
    //     return () => window.removeEventListener("wheel", onScroll);
    //
    // }, [inViewport]);
    // if (inViewport) {
    //     console.log("in viewport:");
    //     document.body.style.overflowY = 'hidden'
    //     onPoint=true
    // }else{
    //     onPoint=false
    // }
    const [index, setIndex] = React.useState(1);
    const timeoutRef = React.useRef<NodeJS.Timeout>();

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === 4 - 1 ? 1 : prevIndex + 1
                ),
            2500
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
useEffect(()=>{
    jump(index)
},[index])
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    return (


            <Steps startsFrom={1}>
                {children}
            </Steps>


    );
};

export default ScrollSlider;
