import React from 'react';
import  './HelpCard.scss'

interface Props{
    icon:any;
    value:any;
    valueSuffix?:string;
    header:string;
    des:string;
}
const HelpCard = (props:Props) => {
    return (
        <div className="HelpCard">
            <div>
                <img src={props.icon}/>
                <p className='text-6xl my-4 font-medium'>
                    {props.value}

                    <span className="HelpCard-suffix">{props.valueSuffix}</span></p>
                <h4>{props.header}</h4>
                <p>{props.des}</p>
            </div>
        </div>
    );
};

export default HelpCard;
