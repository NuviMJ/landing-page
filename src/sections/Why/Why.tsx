import React from "react";
import "./Why.scss";
import WhyCard from "../../components/WhyCard";
// @ts-ignore
import employeeIcon from "../../assets/img/why/1.png";
// @ts-ignore
import increaseIcon from "../../assets/img/why/2.png";
// @ts-ignore
import retentionIcon from "../../assets/img/why/3.png";
// @ts-ignore
import transformIcon from "../../assets/img/why/4.png";
// @ts-ignore
import creatingIcon from "../../assets/img/why/5.png";
// @ts-ignore
import diversityIcon from "../../assets/img/why/6.png";
// @ts-ignore
import drivingIcon from "../../assets/img/why/7.png";

const Why = () => {
  return (
    <div className="Why section bg-white">
      <div>
        <div className="Why-headerContainer">
          <p className="red-heading">Why companies need Coachello?</p>
          <h2 className="mt-2">
            A personalised approach <br />
            for 2023 challenges{" "}
          </h2>
        </div>
        <div className="Why-cardContainer">
          <div>
            <WhyCard icon={employeeIcon} title="Employee Wellbeing" />
          </div>
          <div>
            <WhyCard icon={creatingIcon} title="Creating a Coaching Culture" />
          </div>
          <div>
            <WhyCard icon={drivingIcon} title=" Driving Leadership" />
          </div>
          <div>
            <WhyCard icon={retentionIcon} title="Retention & Engagement" />
          </div>
          <div>
            <WhyCard icon={increaseIcon} title="Increasing Performance" />
          </div>
          <div>
            <WhyCard
              icon={transformIcon}
              title="Transformational Change + The New Workspace "
            />
          </div>
          <div>
            <WhyCard icon={diversityIcon} title="Diversity and Inclusion" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
