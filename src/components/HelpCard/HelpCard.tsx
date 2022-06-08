import React from 'react';
import  './HelpCard.scss'

interface Props{
    icon:any;
    value:string;
    valueSuffix?:string;
    header:string;
    des:string;
}
const HelpCard = (props:Props) => {
    return (
        <div className="HelpCard">
            <div>
                <img src={props.icon}/>
                <h1>{props.value}<span>{props.valueSuffix}</span></h1>
                <h4>{props.header}</h4>
                <p>{props.des}</p>
            </div>
        </div>
    );
};

export default HelpCard;
