import React from 'react';
import  './WhatYouGetCard.scss'

interface Props{
    icon:any;
    header:string;

}
const WhatYouGetCard = (props:Props) => {
    return (
        <div className="WhatYouGetCard">
            <div>
                <img src={props.icon}/>
                <h3>{props.header}</h3>

            </div>
        </div>
    );
};

export default WhatYouGetCard;
