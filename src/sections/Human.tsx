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

const Human = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center">Human, Tech and Data for success</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <IconCard
          icon={i1Img}
          header={"Human"}
          color="bg-green"
          des="Coachello vetted world-class ICF certifies coaches"
        />
        <IconCard
          icon={i2Img}
          header={"Tech"}
          color="bg-warm-dark"
          des="Integrated into the workplace of your leaders"
        />
        <IconCard
          icon={i3Img}
          header={"Data"}
          color="bg-green"
          des="Showing aggregated progress of (individual) transformation and behavioural change."
        />
      </div>
    </div>
  );
};

export default Human;
