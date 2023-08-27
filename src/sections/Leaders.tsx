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
          Leaders at all levels need <br /> personalised support.
        </h2>
        <div className="flex items-center justify-center gap-5 px-10">
          <LeaderCard
            bgColor="bg-warm"
            img={p1Img}
            title="Nail my Public Speaking skills"
            des="Marie"
          />
          <LeaderCard
            bgColor="bg-warm-dark"
            img={p2Img}
            title="Identify my strengths"
            des="Edouardo"
          />
          <LeaderCard
            bgColor="bg-warm"
            img={p3Img}
            title="Provide constructive Feedbacks"
            des="Stefen"
          />
        </div>
        <div className="flex items-center justify-center gap-5 mt-5">
          <LeaderCard
            bgColor="bg-warm-dark"
            img={p4Img}
            title="Empower myself as a women leader"
            des="Paula"
          />
          <LeaderCard
            bgColor="bg-warm"
            img={p5Img}
            title="Manage my stress to be more performant"
            des="Tim"
          />
          <LeaderCard
            bgColor="bg-warm-dark"
            img={p6Img}
            title="Develop a stronger vision for my company"
            des="Paul"
          />
        </div>
      </div>
      <div className="bg-green-light flex flex-col items-center section">
        <h2 className="text-center mb-8">
          Learn how individualized coaching <br />
          can transform your company
        </h2>
        <a className="border border-gray rounded-full px-5 py-3 flex items-center gap-3">
          Get a free consulting call{" "}
          <ArrowRight className="flex items-center" />
        </a>
      </div>
    </>
  );
};

export default Leaders;
