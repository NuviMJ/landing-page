import React from "react";
import LeaderCard from "../components/LeaderCard";
// @ts-ignore
import p1Img from "../assets/img/leaders/maria.png";

// @ts-ignore
import p2Img from "../assets/img/leaders/edo.png";

// @ts-ignore
import p3Img from "../assets/img/leaders/stefen.png";

// @ts-ignore
import p4Img from "../assets/img/leaders/paula.png";

// @ts-ignore
import p5Img from "../assets/img/leaders/tim.png";

// @ts-ignore
import p6Img from "../assets/img/leaders/paul.png";
import { ArrowRight } from "@icon-park/react";

const Leaders = () => {
  return (
    <>
      <div className="section lg:px-32 bg-white">
        <h2 className="text-center mb-8">
          Les leaders à tous les niveaux ont
          <br /> besoin d'un accompagnement <br /> personnalisé
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:px-10">
          <LeaderCard
            bgColor="bg-warm"
            img={p1Img}
            title="Améliorer ma prise de parole en public"
            des="Marie"
          />
          <LeaderCard
            bgColor="bg-warm-dark"
            img={p2Img}
            title="Identifier mes forces"
            des="Edouardo"
          />
          <LeaderCard
            bgColor="bg-warm"
            img={p3Img}
            title="Donner des feedbacks constructifs"
            des="Stefen"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-5">
          <LeaderCard
            bgColor="bg-warm-dark"
            img={p4Img}
            title="Renforcer mon leadership en tant que femme"
            des="Paula"
          />
          <LeaderCard
            bgColor="bg-warm"
            img={p5Img}
            title="Gérer mon stress pour être plus performant"
            des="Tim"
          />
          <LeaderCard
            bgColor="bg-warm-dark"
            img={p6Img}
            title="Développer une vision plus forte pour mon entreprise"
            des="Paul"
          />
        </div>
      </div>
      <div className="bg-green-light flex flex-col items-center section">
        <h2 className="text-center mb-8">
          Découvrez comment le coaching personnalisé
          <br /> peut transformer votre entreprise
        </h2>
        <a className="border border-gray rounded-full px-5 py-3 flex items-center gap-3">
          Parler à un expert <ArrowRight className="flex items-center" />
        </a>
      </div>
    </>
  );
};

export default Leaders;
