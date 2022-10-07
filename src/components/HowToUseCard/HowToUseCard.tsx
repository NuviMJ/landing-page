import './HowToUseCard.scss'
// @ts-ignore
import arrowImg from '../../assets/img/arrow-right.png'

import React from 'react';

interface Props {
    icon: any;
    header: string;
    des: string;
}

const HowToUseCard = (props: Props) => {
    return (
        <div className={"HowToUseCard min-w-[230px]"}>

            <div className="HowToUseCard-top ">
                <div className="">
                <img className="HowToUseCard-img"  src={props.icon}/>
                <div className="HowToUseCard-header">{props.header}</div>
                <img className="HowToUseCard-arrow" src={arrowImg}/>

            </div>
            </div>
            <div className="HowToUseCard-bottom">
                <div>
<div className={"HowToUseCard-des"}>
    {props.des}
</div>
            </div>
                </div>
        </div>
    );
};

export default HowToUseCard;
