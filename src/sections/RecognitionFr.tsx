import React from "react";
// @ts-ignore
import slackLogo from "../assets/img/slack.png";
// @ts-ignore
import msLogo from "../assets/img/microsoft.png";
const Recognition = () => {
  return (
    <div className="section bg-white flex flex-col md:flex-row">
      <div className=" flex-1">
        <p className="red-heading my-2">reconnaissance</p>
        <h2 className="my-2">De nos partenaires. </h2>
      </div>
      <div className="grid grid-cols-2 flex-1 gap-8">
        <div className="p-8 border border-gray/20 rounded">
          <img className="h-10" src={slackLogo} />
          <h5 className="mb-3 mt-6">Programme Slack Future of Work </h5>
          <p>
            Sélectionné dans le programme Future of Work de Slack pour les entreprises qui améliorent le future du monde du travail.{" "}
          </p>
        </div>
        <div className="p-8 border border-gray/20 rounded">
          <img className="h-10" src={msLogo} />
          <h5 className="mb-3 mt-6">Lorsque votre partenaire devient client</h5>
          <p>Vous savez que vous faites quelque chose de bien.</p>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
