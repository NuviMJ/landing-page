import React from 'react';
import './ThoughtCard.scss'
// @ts-ignore
import playIcon from '../../assets/img/icons/playButton.svg'

import ReactPlayer from 'react-player'

interface Props {
    icon: any;
    thumb: any;
    url: string;
    title: string;
    company: string;
    date: string;
    className?: string;
}

const ThoughtCard = (prop: Props) => {
    return (
        <div className={"ThoughtCard " + prop.className}>
            <div className="ThoughtCard-wrapper">
                <div className="ThoughtCard-videoContainer">
                    <ReactPlayer
                        controls={true}
                        light={prop.thumb}
                        playing
                        width="100%"
                        url={prop.url}
                        playIcon={
                            <img src={playIcon}
                            />
                        }

                    />
                </div>
                <div className="ThoughtCard-contentContainer">
                    <h3>{prop.title}</h3>
                  <div><img src={prop.icon}/> <p>{prop.company}<br/>{prop.date}</p>
                   </div>
            </div>
            </div>
        </div>
    );
};

export default ThoughtCard;
