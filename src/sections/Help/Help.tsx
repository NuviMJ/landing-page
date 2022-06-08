import React from 'react';
import HelpCard from "../../components/HelpCard/HelpCard";
// @ts-ignore
import averageIcon from '../../assets/img/icons/average.svg'
// @ts-ignore
import satisfactionIcon from '../../assets/img/icons/satisfaction.svg'
// @ts-ignore
import roiIcon from '../../assets/img/icons/roi.svg'
// @ts-ignore
import timeIcon from '../../assets/img/icons/time.svg'
import './Help.scss'
// @ts-ignore
import helpThumb from '../../assets/img/thumbnails/helpThumb.jpg'
import HoverVideoPlayer from "react-hover-video-player";
class CountUp {
    constructor(triggerEl:any, counterEl:any) {
        const counter = document.querySelector(counterEl)
        const trigger = document.querySelector(triggerEl)
        let num = 0

        const countUp = () => {
            if (num <= counter.dataset.stop)
                ++num
            counter.textContent = num
        }

        const observer = new IntersectionObserver((el) => {
            if (el[0].isIntersecting) {
                const interval = setInterval(() => {
                    (num < counter.dataset.stop) ? countUp() : clearInterval(interval)
                }, counter.dataset.speed)
            }
        }, { threshold: [0] })

        observer.observe(trigger)
    }
}

const Help = () => {
    return (
        <div className="Help">
            <div className="Help-wrapper">
                <div className="Help-leftContainer">
                    <div>
                        <p className="h1-red">Outcome based</p>
                        <h2>Help your talents navigate through the constant changes in your company & their lives</h2>
                        <div className="Help-videoContainer">
                            <HoverVideoPlayer
                                className="Help-videoCard"
                                videoSrc="https://res.cloudinary.com/coachello-dev/video/upload/v1654021005/landing-page/01_Who_are_our_coaches_V1_mbdyts.mp4"
                                pausedOverlay={
                                    <img
                                        src={helpThumb}
                                        alt=""
                                        style={{
                                            // Make the image expand to cover the video's dimensions
                                            display:"none",
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                }
                                loadingOverlay={
                                    <div className="loading-overlay">
                                        <div className="loading-spinner"/>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="Help-rightContainer">
                    <div>
                        <HelpCard value="70%" header="Average progress"
                              des="With respect to each coachees challenge, based on over 500 talents coached on Coachello"
                              icon={averageIcon}/>  </div>
                        <div>
                            <HelpCard valueSuffix="/5" value="4.95" header="Satisfaction"
                              des="average user satisfaction"
                              icon={satisfactionIcon}/>  </div>
                            <div><HelpCard value="3.5-9x" header="ROI"
                              des="monetary gains"
                              icon={roiIcon}/>  </div>
                                <div> <HelpCard value="24h" header="Time to roll out"
                              des="to start your coaching program"
                              icon={timeIcon}/>  </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
