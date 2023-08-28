import React from "react";

interface Props {
  number: any;
  header: string;
  des: string;
  color: string;
}

const AssessmentCard = (props: Props) => {
  return (
    <div className={`flex flex-col items-center text-center h-full`}>
      <h3 className="bg-green rounded-full mx-auto mb-5">0{props.number}.</h3>
      <div
        className={`bg-warm p-7 flex flex-col gap-3 rounded text-justify h-full ${props.color}`}
      >
        <h4 className="text-center mb-5">{props.header}</h4>
        <p>{props.des}</p>
      </div>
    </div>
  );
};

export default AssessmentCard;
