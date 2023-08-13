import React from "react";
import "./ProfileVideoCard.scss";
// @ts-ignore
import playIcon from "../../../assets/img/old/icons/playButton.svg";

import ReactPlayer from "react-player";

interface Props {
  flag: any;
  thumb: any;
  url: string;
  name: string;
  position: string;
  des: any;
  className?: string;
}

const ProfileVideoCard = (prop: Props) => {
  return (
    <div className={"ProfileVideoCard " + prop.className}>
      <div className="ProfileVideoCard-wrapper">
        <div className="ProfileVideoCard-videoContainer">
          <ReactPlayer
            controls={true}
            light={prop.thumb}
            playing
            width="100%"
            url={prop.url}
            playIcon={<img src={playIcon} />}
          />
        </div>
        <div className="ProfileVideoCard-contentContainer">
          <h2>
            {prop.name}
            <img src={prop.flag} />
          </h2>
          <h4>{prop.position}</h4>
          <p>{prop.des}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileVideoCard;
