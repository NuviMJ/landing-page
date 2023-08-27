import React from "react";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/leaders/transform.png";
// @ts-ignore
import i2Img from "../assets/img/leaders/transform2.png";
// @ts-ignore
import i3Img from "../assets/img/leaders/transform3.png";
// @ts-ignore
import i4Img from "../assets/img/leaders/transform4.png";
const TransformLeaders = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center mb-8">
        Transform your leaders with
        <br /> Coachello
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <IconCard
          icon={i1Img}
          header={"Individual coaching"}
          color="bg-green-light"
          des="1:1 coaching embedded in the workplace of identified leaders"
        />
        <IconCard
          icon={i2Img}
          header={"Group workshops"}
          color="bg-warm-dark"
          des="Group coaching, co-development, DiSC, soft-skills training"
        />
        <IconCard
          icon={i3Img}
          header={"Internal coaching"}
          color="bg-green-light"
          des="Coachello technology to power your organizations coaching programs"
        />
        <IconCard
          icon={i4Img}
          header={"Executive coaching"}
          color="bg-warm-dark"
          des="C-level coaches for C-level leaders"
        />
      </div>
    </div>
  );
};

export default TransformLeaders;
