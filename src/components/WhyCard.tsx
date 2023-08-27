import React from "react";

interface Props {
  icon: any;
  title: string;
}
const WhyCard = (props: Props) => {
  return (
    <div className="border border-gray/10 rounded p-5 h-full">
      <div className="flex flex-col items-center">
        <img className="h-32 " src={props.icon} />
        <p className="my-5 text-center font-semibold">{props.title}</p>
      </div>
    </div>
  );
};

export default WhyCard;
