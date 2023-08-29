import React from "react";
import "./MeetCoaches.scss";
// @ts-ignore
import amelieImg from "../../assets/img/coaches/amelie.png";
// @ts-ignore
import joffImg from "../../assets/img/coaches/joff.png";
// @ts-ignore
import olivImg from "../../assets/img/coaches/olivier.png";
// @ts-ignore
import camImg from "../../assets/img/coaches/amilla.png";
// @ts-ignore
import kristImg from "../../assets/img/coaches/krist.png";

const MeetCoaches = () => {
  return (
    <div className="section bg-white">
      <div className="text-center lg:px-24">
        <div className="">
          <p className="red-heading">Nos coachs</p>
          <h2 className="mt-3 mb-10">Rencontrez certains de nos coachs</h2>
        </div>
        <p className="mb-10">
          Nos coachs sont tous certifiés par l’ICF, ont réalisé plus de 500 heures de coaching, sont supervisés et ont tous eu des carrières professionnels riches dans diverses industries à des hauts postes. Profondément humanistes, ils sont tous animés par la même envie de faire grandir leurs coachés. Nous animons cette communauté en continu et veillons à garder une qualité continue. Ils peuvent aider vos leaders sur n'importe quel sujet, de la prévention au burn-out à la prise de parole en public, en passant par le management et le leadership. Vos leaders choisissent leurs coachs en fonction de leur personnalité.
        </p>

        <div className="MeetCoaches-imgContainer gap-5">
          <div>
            <h4>Amélie</h4>
            <img src={amelieImg} />
          </div>
          <div>
            <h4>Joffrey</h4>
            <img src={joffImg} />
          </div>
          <div>
            <h4>Olivier</h4>
            <img src={olivImg} />
          </div>
          <div>
            <h4>Camilla</h4>
            <img src={camImg} />
          </div>
          <div>
            <h4>Kristelle</h4>
            <img src={kristImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetCoaches;
