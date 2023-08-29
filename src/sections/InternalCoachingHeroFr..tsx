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
          <h1 className="leading-[1.1] mb-3">
            Coaching <br />
            interne
          </h1>

          <ul className="flex flex-col gap-3 p-0">
            <span className="font-normal mb-1 mt-5">Pour l’organisation :</span>

            <li className="icon-text">
              <GreenTick />
              Centralise toutes vos données liées au coaching
            </li>

            <li className="icon-text">
              <GreenTick />
              Vos coachs internes sont accessible sur la plateforme{" "}
            </li>
            <li className="icon-text">
              <GreenTick />
              Accès au dashboard pour piloter et mesurer les programmes
            </li>
            <li className="icon-text">
              <GreenTick />
              Optimisation de votre temps{" "}
            </li>
          </ul>
          <ul className="flex flex-col gap-3 p-0">
            <span className="font-normal mb-2 mt-5">Pour les talents :</span>

            <li className="icon-text">
              <GreenTick />
              Coaching intégré dans leur environnement de travail
            </li>

            <li className="icon-text">
              <GreenTick />
              Meilleure expérience, fluide et simple
            </li>
          </ul>
          <ul className="flex flex-col gap-3 p-0">
            <span className="font-normal mb-2 mt-5">
              Pour les coachs internes :
            </span>
            <li className="icon-text">
              <GreenTick />
              Toutes leurs réservations de séances centralisées
            </li>
            <li className="icon-text">
              <GreenTick />
              Gain de temps administratif, meilleure productivité
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
