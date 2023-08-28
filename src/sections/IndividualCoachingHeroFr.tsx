import React from "react";
// @ts-ignore
import heroImg from "../assets/img/individual-coaching.png";

const IndividualCoachingHero = () => {
  return (
    <div className="section bg-warm">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="lg:w-1/3 flex flex-col items-start justify-center">
          <h1 className="leading-[1.1] my-5">Coaching individuel</h1>

          <p>
            Un accompagnement personnalisé permettant au coaché d’atteindre des objectifs tangibles qu’il s’est fixé en mettant en place des plans d’actions concrets.

            Le coaching est un accompgnement holistique agissant à la fois sur le bien-être et la performance et transformant les comportements de manière durable.
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
