import React from "react";
// @ts-ignore
import playIcon from "../../../assets/img/old/icons/playButton.svg";

import ReactPlayer from "react-player";

interface Props {
  icon: any;
  thumb: any;
  title: string;
  subject?: string;
  company: string;
  date: string;
  className?: string;
}

const ThoughtCard = (prop: Props) => {
  return (
    <div className={"rounded-xl h-full bg-white " + prop.className}>
      <div className="">
        <div className="relative">
          <img className="w-full" src={prop.thumb} />
          <p className="absolute right-3 bottom-5 bg-pink rounded px-2">
            {prop.subject}
          </p>
        </div>
        <div className="p-5 ">
          <h3 className="mb-5">{prop.title}</h3>
          <div className="flex gap-5 items-center">
            <img src={prop.icon} />
            <div>
              <p>{prop.company}</p>
              <p>{prop.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtCard;
