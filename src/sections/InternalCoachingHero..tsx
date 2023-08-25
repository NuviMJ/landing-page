import React from "react";
// @ts-ignore
import heroImg from "../assets/img/internal-coaching.png";
import { CheckOne } from "@icon-park/react";

const InternalCoachingHero = () => {
  return (
    <div className="section bg-warm">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="lg:w-1/2 flex flex-col items-start justify-center">
          <h1 className="leading-[1.1] my-5">Internal coaching</h1>

          <ul className="flex flex-col gap-3">
            <span className="font-normal">For the organization:</span>

            <li className="icon-text">
              <CheckOne className="text-green-700" />
              All things coaching centralised
            </li>

            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Upload your internal coaches{" "}
            </li>
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Data-driven approach
            </li>
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Cost saving{" "}
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <span className="font-normal">For talents:</span>

            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Coaching embedded in employee's workplace
            </li>

            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Better experience
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <span className="font-normal">For internal coaches:</span>
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              All bookings centralised
            </li>
            <li className="icon-text">
              <CheckOne className="text-green-700" />
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
