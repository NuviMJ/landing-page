import React from "react";
// @ts-ignore
import heroImg from "../assets/img/executive.png";
import { CheckOne } from "@icon-park/react";

const ExecutiveCoachingHero = () => {
  return (
    <div className="section bg-warm">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="lg:w-1/2 flex flex-col items-start justify-center">
          <h1 className="leading-[1.1] my-5">Executive & C-suite coaching</h1>

          <ul className="flex flex-col gap-3">
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Unlimited coaching
            </li>
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Premium and tailor made support
            </li>
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Schedule one-on-one sessions at own pace & convenience
            </li>
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Flexible : online or face to face
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

export default ExecutiveCoachingHero;
