import React from "react";

// @ts-ignore
import ICFLogo from "../assets/img/old/ourCoaches/icf.png";
// @ts-ignore
import EMCCLogo from "../assets/img/old/ourCoaches/emcc.png";
// @ts-ignore
import coach1 from "../assets/img/old/ourCoaches/Lisa.jpg";
// @ts-ignore
import coach2 from "../assets/img/old/ourCoaches/Mete.jpg";
// @ts-ignore
import coach3 from "../assets/img/old/ourCoaches/Brankica.jpg";
import ReactPlayer from "react-player";

const OurCoaches = () => {
  return (
    <div className="section lg:px-32 bg-warm">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p className="red-heading">Nos Coachs</p>
          <h2 className="my-5">Portée mondiale, approche locale</h2>
        </div>
        <p className="text-center">
          Nos coachs sont tous certifiés par l’ICF, ont réalisé plus de 500 heures de coaching, sont supervisés et ont tous eu des carrières professionnels riches dans diverses industries à des hauts postes. Profondément humanistes, ils sont tous animés par la même envie de faire grandir leurs coachés. Nous animons cette communauté en continu et veillons à garder une qualité


        </p>
        <div className="flex my-5">
          <img className="h-16" src={ICFLogo} />
          <img className="h-16" src={EMCCLogo} />
        </div>
        <div>
          <ReactPlayer
            playing
            muted={true}
            loop={true}
            url="https://www.youtube.com/watch?v=ajLPlTRYTJY"
            width={"540px"}
            height={"300px"}
            // style={{ minHeight: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurCoaches;
