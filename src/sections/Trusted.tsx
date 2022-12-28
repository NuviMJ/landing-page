import React from "react";
// @ts-ignore
import progress1Img from "../assets/img/progress1.png";
// @ts-ignore
import progress2Img from "../assets/img/progress2.png";
// @ts-ignore
import thrustedImg from "../assets/img/thrustedRight.png";

const Trusted = () => {
  return (
    <div className="bg-white p-24">
      <h3>Trusted by 100+ leading organisations</h3>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex gap-5 flex-1 items-center md:flex-row flex-col">
          <div className="">
            <img className="w-full" src={progress1Img} />
            <p>9.6/10 Coach Satisfaction On over 5000 sessions</p>
          </div>
          <div className="">
            <img className="w-full" src={progress2Img} />
            <p>75% Average progress On over 2000 sessions </p>
          </div>
        </div>
        <div className="flex-1">
          <img className="w-full lg:px-24" src={thrustedImg} />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
