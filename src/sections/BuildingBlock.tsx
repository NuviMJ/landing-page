import React from "react";

const BuildingBlock = () => {
  return (
    <div
      className="p-10 py-20 md:p-32 bg-[#F2EBE3]"
      // style={{
      //   background:
      //     "linear-gradient(0deg, rgba(255, 255, 255, 0.47), rgba(255, 255, 255, 0.47)), #F2EBE3",
      // }}
    >
      <h2>Building blocks for leading companies of tomorrow</h2>
      <div className="flex gap-5 mt-14">
        <div className="border-solid border-0 border-l-4 border-red-500 p-5 w-52">
          <h4>Individual Coaching</h4>
        </div>
        <div className="flex gap-5 flex-wrap flex-1">
          <div className="text-center  rounded bg-white p-6 shadow-lg flex-1 flex items-center  justify-center flex-col">
            <h4 className="m-2">Coaching as a benefit</h4>
            <span className="font-light">On-demand</span>
          </div>
          <div className="text-center  rounded bg-white p-6 shadow-lg flex-1 flex items-center  justify-center flex-col">
            <h4 className="m-2">Leadership</h4>
            <span className="font-light">Leadership development</span>
          </div>

          <div className="text-center  rounded bg-white p-6 shadow-lg flex-1 flex items-center  justify-center flex-col">
            <h4 className="m-2">Climate</h4>
            <span className="font-light">On-demand</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-14">
        <div className="border-solid border-0 border-l-4 border-red-400 p-5  w-52">
          <h4>Team</h4>
        </div>
        <div className="flex gap-5 flex-wrap flex-1">
          <div className="text-center rounded bg-[#FDF4EA] p-6 shadow-lg flex-1 flex items-center  justify-center flex-col">
            <h4 className="m-2">Group-coaching</h4>
            <span className="font-light">
              Determine objectives and get alligned
            </span>
          </div>
          <div className="text-center  rounded bg-[#FDF4EA] p-6 shadow-lg flex-1 flex items-center  justify-center flex-col">
            <h4 className="m-2">Co-development</h4>
            <span className="font-light">
              Co-construct under auspices of experienced coaches
            </span>
          </div>

          <div className="text-center  rounded bg-[#FDF4EA] p-6 shadow-lg flex-1  flex items-center  justify-center flex-col">
            <h4 className="m-2">Training</h4>
            <span className="font-light">
              Obtain specific skills from experienced trainers
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-14">
        <div className="border-solid border-0 border-l-4 border-red-200 p-5  w-52">
          <h4>Organisation wide support</h4>
        </div>
        <div className="flex gap-5 flex-wrap flex-1">
          <div className="text-center  rounded bg-[#FDF4EA] p-6 shadow-lg flex-1 flex items-center justify-center">
            <h4 className="m-2">Coachello Talks</h4>
          </div>

          <div className="text-center rounded bg-[#FDF4EA] p-6 shadow-lg flex-1 flex items-center  justify-center">
            <h4 className="m-2">Coachello’s app and analytics platform</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingBlock;
