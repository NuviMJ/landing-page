import React from "react";

// @ts-ignore
import heroImg from "../assets/img/hero.png";
// @ts-ignore
import microsoftLogo from "../assets/img/companies/microsoft.png";
// @ts-ignore
import boltLogo from "../assets/img/companies/boltLogo.png";
// @ts-ignore
import gorgiasLogo from "../assets/img/companies/gorgiasLogo.png";
// @ts-ignore
import hylandLogo from "../assets/img/companies/hylandLogo.png";
// @ts-ignore
import meilleursLogo from "../assets/img/companies/meilleursLogo.png";
// @ts-ignore
import morningLogo from "../assets/img/companies/morningLogo.png";
// @ts-ignore
import enedisLogo from "../assets/img/companies/enedis.png";
// @ts-ignore
import qontoLogo from "../assets/img/companies/qontoLogo.png";
// @ts-ignore
import hecLogo from "../assets/img/companies/HEC.png";

import { useTypeWriter } from "../hooks/useTypeWriter";

const Hero = () => {
  const sentences = [
    "Coaching for a better world. ",
    "Coachello is for your support. ",
  ];
  const displayedSentence = useTypeWriter(sentences);
  return (
    <>
      <div className="section bg-warm">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="lg:w-2/5 flex flex-col items-start justify-center">
            <h1 className="leading-[1.1] my-5 h-48">{displayedSentence}</h1>

            <a
              target="_blank"
              className="mt-8 no-underline"
              rel="noopener noreferrer"
              href="https://meetings.hubspot.com/quentin-bouche/intro-coachello"
            >
              <button className="py-3 cursor-pointer px-8 bg-pink rounded-3xl flex gap-4 border-0 items-center hover:bg-pink-200">
                Talk to an expert
              </button>
            </a>
          </div>
          <div className="lg:w-3/5">
            <img style={{ maxWidth: "100%" }} src={heroImg} />
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-wrap justify-center bg-warm-dark [&>div>img]:h-12">
        <div>
          <img src={microsoftLogo} />
        </div>
        <div>
          <img src={boltLogo} />
        </div>
        <div>
          <img src={gorgiasLogo} />
        </div>
        <div>
          <img src={hylandLogo} />
        </div>
        <div>
          <img src={meilleursLogo} />
        </div>
        <div>
          <img src={morningLogo} />
        </div>
        <div>
          <img src={enedisLogo} />
        </div>
        <div>
          <img src={qontoLogo} />
        </div>
        <div>
          <img src={hecLogo} />
        </div>
      </div>
    </>
  );
};

export default Hero;
