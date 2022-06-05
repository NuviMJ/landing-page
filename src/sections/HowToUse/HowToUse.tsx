import React from 'react';
import './HowToUse.scss'
import VideoCard from "../../components/VideoCard/VideoCard";
// @ts-ignore
import benefitThumb from '../../assets/img/thumbnails/benefit.svg'
// @ts-ignore
import LDThumb from '../../assets/img/thumbnails/l&d.svg'
// @ts-ignore
import WorkshopThumb from '../../assets/img/thumbnails/groupWorkShop.jpg'

const HowToUse = () => {
    return (
        <div className="HowToUse">
            <div className="HowToUse-wrapper">
                <h2>How companies use Coachello?</h2>
                <div className="HowToUse-cardContainer">
                    <VideoCard
                        title="Coaching as a benefit"
                        des="On-demand 1:1 coaching sessions whenever your talents need it " className="HowToUse-card"
                        thumb={benefitThumb}
                        url="https://res.cloudinary.com/coachello-dev/video/upload/v1654019776/landing-page/coach_as_benefit_fmnu4r.mp4"/>
                    <VideoCard title="Within a L&D program"
                               des="1:1 coaching sessions for identified leaders integrated into your L&D strategy"
                               className="HowToUse-card"
                               thumb={LDThumb}
                               url="https://res.cloudinary.com/coachello-dev/video/upload/v1654019621/landing-page/within_a_L_D_tytbnh.mp4"/>
                    <VideoCard title="Group workshops"
                               des="Group coaching, co-development, mediation, soft-skills training "
                               className="HowToUse-card"
                               thumb={WorkshopThumb}
                               url="https://res.cloudinary.com/coachello-dev/video/upload/v1654364985/landing-page/group_workshop_isu7km.mp4"/>
                    {/*https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4*/}
                </div>
            </div>
        </div>
    );
};

export default HowToUse;
