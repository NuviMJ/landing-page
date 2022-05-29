import React from 'react';
import './HowToUse.scss'
import VideoCard from "../../components/VideoCard/VideoCard";
// @ts-ignore
import benefitThumb from '../../assets/img/thumbnails/benefit.jpg'

const HowToUse = () => {
    return (
        <div className="HowToUse">
            <div className="HowToUse-wrapper">
                <h2>How companies use Coachello?</h2>
               <div className="HowToUse-cardContainer">
                   <VideoCard title="Coaching as a benefit" des="On-demand 1:1 coaching sessions whenever your talents need it " className="HowToUse-card" thumb={benefitThumb} url=""/>
                   <VideoCard title="Within a L&D program" des="1:1 coaching sessions for identified leaders integrated into your L&D strategy" className="HowToUse-card" thumb={benefitThumb} url=""/>
                   <VideoCard title="Group workshops" des="Group coaching, co-development, mediation, soft-skills training " className="HowToUse-card" thumb={benefitThumb} url=""/>
                   {/*https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4*/}
               </div>
            </div>
        </div>
    );
};

export default HowToUse;
