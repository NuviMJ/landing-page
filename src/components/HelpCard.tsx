import React from "react";

interface Props {
  icon: any;
  value: any;
  valueSuffix?: string;
  header: string;
  des: string;
}
const HelpCard = (props: Props) => {
  return (
    <div className="flex gap-3 bg-white p-6">
      <img className="w-20 h-20" src={props.icon} />
      <div className="">
        <p className="text-6xl font-medium my-2">
          {props.value}

          <span className="my-2">{props.valueSuffix}</span>
        </p>
        <h4 className="my-5">{props.header}</h4>
        <p>{props.des}</p>
      </div>
    </div>
  );
};

export default HelpCard;
