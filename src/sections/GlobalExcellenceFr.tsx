import React from "react";

// @ts-ignore
import ExcellenceImg from "../assets/img/excellence.png";
// @ts-ignore
import mapImg from "../assets/img/worldMap.png";

const GlobalExcellence = () => {
  return (
    <div className="section bg-warm-light">
      <div
        style={{ backgroundImage: `url(${mapImg})` }}
        className="flex gap-10 bg-contain"
      >
        <div className="">
          <div className="">
            <p className="red-heading">Excellence mondiale</p>
            <h2 className="mt-3 mb-10">
              Votre équipe est<br /> internationale ?<br /> La nôtre aussi.
            </h2>
          </div>
          <p>
            Excellence mondiale - c'est ce que nous exigeons de nos coachs. Nous évaluons leur excellence grâce à un processus d'entretien en deux étapes, des vérifications de références et des évaluations. Nous surveillons également leurs performances, ce qui nous permet de garantir la qualité du coaching pour toutes les parties prenantes.
          </p>
        </div>
        <img className="w-3/5 object-contain" src={ExcellenceImg} />
      </div>
    </div>
  );
};

export default GlobalExcellence;