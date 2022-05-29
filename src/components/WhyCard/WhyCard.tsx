import React from 'react';
import  './WhyCard.scss'

interface Props{
    icon:any;
    title:string;

}
const WhyCard = (props:Props) => {
    return (
        <div className="WhyCard">
            <div>
                <img src={props.icon}/>
                <p>{props.title}</p>
            </div>
        </div>
    );
};

export default WhyCard;
