import React from 'react';

interface Props {
    img: any;
    redTitle: string;
    title: string;
    desE: any;
}

import './CoachProfile.scss'

const CoachProfile = (prop: Props) => {
    return (
        <div className="CoachProfile">
            <div>
                <div className="CoachProfile-imgContainer">
                    <img src={prop.img}/>
                </div>
                <div className="CoachProfile-contentContainer">
                    <div><p  className="h1-red">{prop.redTitle}</p>
                       <h2>{prop.title}</h2>
                        {prop.desE}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoachProfile;
