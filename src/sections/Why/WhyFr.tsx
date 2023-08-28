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
          <p className="red-heading">Pourquoi LE COACHING ?</p>
          <h2 className="mb-8 mt-3">
            Aider vos leaders à relever ces challenges <br /> de manière personnalisée
           {" "}
          </h2>
        </div>
        <div className="Why-cardContainer">
          <div>
            <WhyCard icon={employeeIcon} title="Bien-être des employés" />
          </div>
          <div>
            <WhyCard icon={creatingIcon} title="Posture de managers coachs" />
          </div>
          <div>
            <WhyCard icon={drivingIcon} title=" Favoriser le leadership" />
          </div>
          <div>
            <WhyCard icon={retentionIcon} title="Rétention et engagement" />
          </div>
          <div>
            <WhyCard icon={increaseIcon} title="Augmentation de la performance
            " />
          </div>
          <div>
            <WhyCard
              icon={transformIcon}
              title="Transformation des organisations "
            />
          </div>
          <div>
            <WhyCard icon={diversityIcon} title="Diversité et inclusion" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
