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
const CaseStudies = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center">Case-studies</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <IconCard
          icon={i1Img}
          header={"Education"}
          color="bg-green"
          des="HEC embedded Coachello for 1:1 leadership coaching by their professors for candidates in the EMBA program"
        />
        <IconCard
          icon={i2Img}
          header={"Internal coaching practice"}
          color="bg-warm-dark"
          des="Telecom company streamlined and made their extensive coaching practice (100+ internal coaches) data-driven "
        />
        <IconCard
          icon={i3Img}
          header={"Internal coaching"}
          color="bg-green"
          des="Scale-up used Coachello’s app for their internal mentoring program"
        />
        <IconCard
          icon={i4Img}
          header={"Leadership consultancy"}
          color="bg-green"
          des="HR consultancy firm to digitalise the access to leadership consultants for their clients"
        />
      </div>

      <div className="mt-10">
        <button className="dashboard-button rounded-full bg-black mx-auto">
          Learn more in 20 minutes
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
