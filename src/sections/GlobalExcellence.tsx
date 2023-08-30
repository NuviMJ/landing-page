import React from "react";

// @ts-ignore
import ExcellenceImg from "../assets/img/excellence.png";
// @ts-ignore
import mapImg from "../assets/img/worldMap.png";
import ReactPlayer from "react-player";

const GlobalExcellence = () => {
  return (
    <div className="section bg-warm-light">
      <div
        style={{ backgroundImage: `url(${mapImg})` }}
        className="flex flex-col md:flex-row gap-10 bg-contain"
      >
        <div className="">
          <div className="">
            <p className="red-heading">Global Excellence</p>
            <h2 className="mt-3 mb-10">
              Your team is
              <br /> global?
              <br />
              So is ours.
            </h2>
          </div>
          <p>
            Global Excellence - is what we require from our coaches. We
            determine their excellence by a two-step interview process,
            reference checks, assessments, and by monitoring their performance
            we can guarantee the coaching quality to all stakeholders.
          </p>
        </div>
        <img className="lg:w-3/5 object-contain" src={ExcellenceImg} />
      </div>
    </div>
  );
};

export default GlobalExcellence;
