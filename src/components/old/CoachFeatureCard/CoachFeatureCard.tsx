import React from "react";
import "./CoachFeatureCard.scss";

interface Props {
  icon: any;
  header: string;
  des?: any;
}
const CoachFeatureCard = (props: Props) => {
  return (
    <div className="CoachFeatureCard border border-gray/20">
      <div>
        <img className="h-20" src={props.icon} />
        <h4>{props.header}</h4>
        {props.des}
      </div>
    </div>
  );
};

export default CoachFeatureCard;
