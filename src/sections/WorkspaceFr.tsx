import React from "react";
// @ts-ignore
import i1Img from "../assets/img/tools.png";

// @ts-ignore
import i2Img from "../assets/img/workspace.png";

const TickIcon = () => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_10213_84385)">
        <path
          d="M9 2C4.86 2 1.5 5.36 1.5 9.5C1.5 13.64 4.86 17 9 17C13.14 17 16.5 13.64 16.5 9.5C16.5 5.36 13.14 2 9 2ZM6.9675 12.7175L4.275 10.025C3.9825 9.7325 3.9825 9.26 4.275 8.9675C4.5675 8.675 5.04 8.675 5.3325 8.9675L7.5 11.1275L12.66 5.9675C12.9525 5.675 13.425 5.675 13.7175 5.9675C14.01 6.26 14.01 6.7325 13.7175 7.025L8.025 12.7175C7.74 13.01 7.26 13.01 6.9675 12.7175Z"
          fill="#323232"
        />
      </g>
      <defs>
        <clipPath id="clip0_10213_84385">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const Workspace = () => {
  return (
    <div className="section bg-white">
      <div className="flex flex-col items-center">
        <h2 className="text-center mb-5">
          La puissance du coaching intégrée à l’environnement de travail
        </h2>
        <img className="h-8 px-5" src={i1Img} />
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-10">
        <img className="grid-cols-1 w-full" src={i2Img} />
        <div className="grid-cols-1 lg:p-10 lg:mx-auto ">
          <h4 className="mb-5">Integré dans MS Teams et Slack</h4>
          <ul className={`gap-5 flex flex-col px-0`}>
            <li className="icon-text">
              <TickIcon />
              Connexion simple sans formation nécessaire
            </li>
            <li className="icon-text">
              <TickIcon />
              Communication centralisée
            </li>
            <li className="icon-text">
              <TickIcon />
              Rappels et notifications via IA
            </li>
            <li className="icon-text">
              <TickIcon />
              Collaboration en temps réel
            </li>
            <li className="icon-text">
              <TickIcon />
              Données et analyses
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
