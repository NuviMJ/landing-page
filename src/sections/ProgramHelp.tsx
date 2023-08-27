import React from "react";
import {
  BuildingOne,
  CalendarThree,
  CooperativeHandshake,
  DocSuccess,
  ElectricWave,
  EveryUser,
  ExchangeTwo,
  PersonalPrivacy,
  RightUser,
  TableReport,
  UserPositioning,
  UserToUserTransmission,
} from "@icon-park/react";
// @ts-ignore
import downArrow from "../assets/img/r-arrow.png";
// @ts-ignore
import upArrow from "../assets/img/r-up-arrow.png";
const ProgramHelp = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center mb-12">
        Coachello helps you create custom <br /> programs from scratch that
        provide <br /> measurable results
      </h2>
      <div className="flex gap-12 flex-wrap md:flex-nowrap items-start">
        <div className="flex flex-col justify-center flex-1">
          <h3 className="bg-green rounded-full mx-auto mb-5">01.</h3>
          <ul className="bg-warm px-16 py-5 flex flex-col gap-3 text-left rounded">
            <h4 className=" text-center mb-5">Engage</h4>
            <span className="flex items-center gap-3">
              <CooperativeHandshake className="my-auto" /> Onboarding
            </span>
            <span className="flex items-center gap-3">
              <UserPositioning className="my-auto" /> Self-Assessment
            </span>
            <span className="flex items-center gap-3">
              <TableReport className="my-auto" /> Results & objectives
            </span>
            <span className="flex items-center gap-3">
              <RightUser className="my-auto" /> Coach matching
            </span>
          </ul>
        </div>
        <h2 className="relative w-0 hidden md:flex justify-center">
          <img src={downArrow} className="absolute h-4" />
        </h2>
        <div className="flex flex-col justify-center text-center flex-1">
          <h3 className="bg-green rounded-full mx-auto mb-5">02.</h3>
          <ul className="bg-warm px-12 py-5 flex flex-col gap-3 text-left rounded">
            <h4 className=" text-center mb-5">Develop</h4>
            <span className="flex items-center gap-3">
              <DocSuccess className="my-auto" /> Tripartite agreement with
              manager and coach
            </span>
            <span className="flex items-center gap-3">
              <UserToUserTransmission className="my-auto" /> 1:1 coaching
            </span>
            <span className="flex items-center gap-3">
              <PersonalPrivacy className="my-auto" /> Personalised exercises
            </span>
            <span className="flex items-center gap-3">
              <CalendarThree className="my-auto" /> Personalised exercises
            </span>
          </ul>
        </div>
        <h2 className="relative w-0 hidden md:flex justify-center">
          <img src={upArrow} className="absolute h-4" />
        </h2>

        <div className="flex flex-col justify-center text-center flex-1">
          <h3 className="bg-green rounded-full mx-auto mb-5">03.</h3>
          <ul className="bg-warm px-8 py-5 flex flex-col gap-3 text-left rounded">
            <h4 className=" text-center mb-5">Envision</h4>
            <span className="flex items-center gap-3">
              <ElectricWave className="my-auto" /> Impact assessment (involving
              peers or manager)
            </span>
            <span className="flex items-center gap-3">
              <EveryUser className="my-auto" />
              Start collective coaching (co-development or group coaching)
            </span>
            <span className="flex items-center gap-3">
              <ExchangeTwo className="my-auto" /> Action plan for organisational
              change
            </span>
            <span className="flex items-center gap-3">
              <BuildingOne className="my-auto" /> Approbation posture
              manager-coach for cascading effect in the organisation
            </span>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <button className="dashboard-button rounded-full bg-black mx-auto">
          Discuss your project with an expert
        </button>
      </div>
    </div>
  );
};

export default ProgramHelp;
