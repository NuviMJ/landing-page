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
const Executives = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center">What executives will get:</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        <IconCard
          icon={i1Img}
          color="bg-green"
          des="Identify growth opportunities "
        />
        <IconCard
          icon={i2Img}
          color="bg-warm-dark"
          des="Gain clarity on goals and develop a plan to achieve them"
        />
        <IconCard
          icon={i3Img}
          color="bg-green"
          des="Manage stress and build resilience"
        />
        <IconCard
          icon={i4Img}
          color="bg-green"
          des="Improve communication  skills and strengthen relationships with teams and stakeholders"
        />
        <IconCard
          icon={i4Img}
          color="bg-green"
          des="Make effective decisions and manage change"
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

export default Executives;
