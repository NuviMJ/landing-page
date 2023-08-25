import React from "react";
// @ts-ignore
import heroImg from "../assets/img/individual-coaching.png";

const IndividualCoachingHero = () => {
  return (
    <div className="section bg-warm">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="lg:w-1/3 flex flex-col items-start justify-center">
          <h1 className="leading-[1.1] my-5">Individual coaching</h1>

          <p>
            1:1 coaching is essential for continuous development, to create room
            for action, to support employee development, and ultimately lead to
            successful organizational change.
          </p>
        </div>
        <div className="lg:w-2/3">
          <img style={{ maxWidth: "100%" }} src={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default IndividualCoachingHero;
