import React from 'react';
import './What.scss'
// @ts-ignore
import ICFLogo from '../../assets/img/icons/slack.svg'
// @ts-ignore
import thomasProfile from '../../assets/img/clients/thomas.svg'
import SlideShow from "../../components/SlideShow/SlideShow";
import {ClientsFeedbackData} from "../../constant/ClientsFeedbackData";
// @ts-ignore
import upperIcon from '../../assets/img/icons/upper.svg'
// @ts-ignore
import downIcon from '../../assets/img/icons/down.svg'
interface Props {
    backColor?:string
}
const What = (prop:Props ) => {
    return (
        <div style={{backgroundColor: prop.backColor }} className="What">
            <div className="What-wrapper">
                <p className="h1-red">What our clients say</p>
                <img className="What-upper" src={upperIcon}/>
                <SlideShow className="What-slideshow">
                    {ClientsFeedbackData.map(({title,des,userDes,userName,icon},index)=> (
                        <div key={index} className="What-sliderContainer">
                            <h2>{title}</h2>
                            <p className="What-des">{des}</p>
                            <div className="What-userContainer">
                                <img src={icon}/>
                                <div>
                                    <p>{userName}</p>
                                    <p>{userDes}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </SlideShow>
                <img className="What-down" src={downIcon}/>
            </div>
        </div>
    );
};

export default What;
