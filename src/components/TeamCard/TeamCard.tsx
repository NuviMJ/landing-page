import React from 'react';
import  './TeamCard.scss'

interface Props{
    profileImg:any;
    name:string;

    des:string
}
const TeamCard = (props:Props) => {
    return (
        <div className="TeamCard">
            <div>
                <img src={props.profileImg}/>
                <h4>{props.name}</h4>
                <p>{props.des}</p>
            </div>
        </div>
    );
};

export default TeamCard;
