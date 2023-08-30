import React from "react";
interface Props {
  bgColor: string;
  img: string;
  title: string;
  des: string;
}
const LeaderCard = (prop: Props) => {
  return (
    <div
      className={`${prop.bgColor} p-8 flex items-center gap-5 rounded-2xl w-full`}
    >
      <img src={prop.img} className="w-16 h-16" />
      <div className="">
        <h5 className="my-2">{prop.title}</h5>
        <p className="my-2 font-normal">{prop.des}</p>
      </div>
    </div>
  );
};

export default LeaderCard;
