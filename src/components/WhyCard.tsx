import React from "react";

interface Props {
  icon: any;
  title: string;
}
const WhyCard = (props: Props) => {
  return (
    <div className="border border-gray/20 rounded px-10 py-5 h-full">
      <div className="flex flex-col items-center">
        <img className="h-32 " src={props.icon} />
        <h5>{props.title}</h5>
      </div>
    </div>
  );
};

export default WhyCard;
