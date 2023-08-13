import React from 'react';
import  './CoachFeatureCard.scss'

interface Props{
    icon:any;
    header:string;
    des?:any
}
const CoachFeatureCard = (props:Props) => {
    return (
        <div className="CoachFeatureCard">
            <div>
                <img src={props.icon}/>
                <h4>{props.header}</h4>
                {props.des}
            </div>
        </div>
    );
};

export default CoachFeatureCard;
