import React from "react";

interface Props {
  icon: any;
  header: string;
  des?: any;
}

const CoachFeatureCard = (props: Props) => {
  return (
    <div className="p-8 border border-gray/20 rounded h-full">
      <div>
        <img className="h-20" src={props.icon} />
        <h4 className="my-5">{props.header}</h4>
        {props.des}
      </div>
    </div>
  );
};

export default CoachFeatureCard;
