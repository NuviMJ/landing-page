import React from "react";

interface Props {
  icon: any;
  header?: string;
  des?: string;
  color?: string;
}

const IconCard = (props: Props) => {
  return (
    <div
      className={`border-2 border-warm-dark/40 rounded h-full flex flex-col ${props.color}`}
    >
      <div className={`flex flex-col gap-5 p-4`}>
        <img className="h-32 w-max px-5" src={props.icon} />
        {props.header && (
          <h5 className="lg:whitespace-nowrap">{props.header}</h5>
        )}
      </div>
      {props.des && (
        <div className="p-5 bg-white h-full">
          <p dangerouslySetInnerHTML={{ __html: props.des }} className={""}></p>
        </div>
      )}
    </div>
  );
};

export default IconCard;
