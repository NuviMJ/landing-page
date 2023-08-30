import React from "react";
// @ts-ignore
import heroImg from "../assets/img/executive.png";
import { CheckOne } from "@icon-park/react";

const ExecutiveCoachingHero = () => {
  return (
    <div className="section bg-warm">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2 flex flex-col items-start justify-center">
          <h1 className="leading-[1.3] mb-8">Coaching pour C-Levels</h1>

          <ul className="flex flex-col gap-3 pl-0">
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Coaching illimité
            </li>
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Assistance haut de gamme et personnalisée
            </li>
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Planifiez des séances 1:1 à votre propre rythme et selon votre
              convenance
            </li>
            <li className="icon-text">
              <CheckOne className="text-green-700" />
              Flexible : en ligne ou en face à face
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
