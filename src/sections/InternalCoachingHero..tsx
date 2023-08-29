import React from "react";
// @ts-ignore
import heroImg from "../assets/img/internal-coaching.png";
import { CheckOne } from "@icon-park/react";
import { GreenTick } from "../components/GreenTick";

const InternalCoachingHero = () => {
  return (
    <div className="section bg-warm">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="lg:w-1/2 flex flex-col items-start justify-center">
          <h1 className="leading-[1.1] mb-5">Internal coaching</h1>

          <ul className="flex flex-col gap-3 p-0">
            <span className="font-normal mb-2 mt-5">For the organization:</span>

            <li className="icon-text">
              <GreenTick />
              All things coaching centralised
            </li>

            <li className="icon-text">
              <GreenTick />
              Upload your internal coaches{" "}
            </li>
            <li className="icon-text">
              <GreenTick />
              Data-driven approach
            </li>
            <li className="icon-text">
              <GreenTick />
              Cost saving{" "}
            </li>
          </ul>
          <ul className="flex flex-col gap-3 p-0">
            <span className="font-normal mb-2 mt-5">For talents:</span>

            <li className="icon-text">
              <GreenTick />
              Coaching embedded in employee's workplace
            </li>

            <li className="icon-text">
              <GreenTick />
              Better experience
            </li>
          </ul>
          <ul className="flex flex-col gap-3 p-0">
            <span className="font-normal mb-2 mt-5">For internal coaches:</span>
            <li className="icon-text">
              <GreenTick />
              All bookings centralised
            </li>
            <li className="icon-text">
              <GreenTick />
              Save administration time
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img style={{ maxWidth: "100%" }} src={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default InternalCoachingHero;
