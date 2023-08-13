import React from "react";

interface Props {
  icon: any;
  header: string;
  des?: string;
  color?: string;
}

const IconCard = (props: Props) => {
  return (
    <div className="border-2 border-warm-dark rounded">
      <div className={`flex flex-col gap-5 p-5 ${props.color}`}>
        <img className="w-32 px-5" src={props.icon} />
        <h5 className="">{props.header}</h5>
      </div>
      {props.des && (
        <div className="p-5 bg-white">
          <p className={""}>{props.des}</p>
        </div>
      )}
    </div>
  );
};

export default IconCard;
