import React from "react";
// @ts-ignore
import slackLogo from "../assets/img/slack.png";
// @ts-ignore
import msLogo from "../assets/img/microsoft.png";
const Recognition = () => {
  return (
    <div className="section bg-white flex flex-col md:flex-row">
      <div className=" flex-1">
        <p className="red-heading my-2">Recognition</p>
        <h2 className="mb-4">From our partners. </h2>
      </div>
      <div className="grid md:grid-cols-2 flex-1 gap-8">
        <div className="p-8 border border-gray/20 rounded">
          <img className="h-10" src={slackLogo} />
          <h5 className="mb-3 mt-6">Slack Future of Work Program</h5>
          <p>
            Selected in Slacks competitive Future of Work program for companies
            that set out to change the future of work.{" "}
          </p>
        </div>
        <div className="p-8 border border-gray/20 rounded">
          <img className="h-10" src={msLogo} />
          <h5 className="mb-3 mt-6">When your partner becomes a client</h5>
          <p>You know you are doing something right.</p>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
