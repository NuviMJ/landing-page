import React from "react";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/benefit/benefit1.png";
// @ts-ignore
import i2Img from "../assets/img/benefit/benefit2.png";
// @ts-ignore
import i3Img from "../assets/img/benefit/benefit3.png";
// @ts-ignore
import i4Img from "../assets/img/benefit/benefit4.png";
const Benefits = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center">What benefits?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <IconCard
          icon={i1Img}
          header={"Customized & embedded coaching in their working environment"}
          color="bg-green"
        />
        <IconCard
          icon={i2Img}
          header={"Assess their leadership behaviours"}
          color="bg-warm-dark"
        />
        <IconCard
          icon={i3Img}
          header={
            "AI Matching and orientation calls for 100% successful matching"
          }
          color="bg-green"
        />
        <IconCard
          icon={i4Img}
          header={"Data-driven for succesful transformations"}
          color="bg-green"
        />
      </div>
    </div>
  );
};

export default Benefits;
