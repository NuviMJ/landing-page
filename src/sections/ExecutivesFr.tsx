import React from "react";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/executives/e1.png";
// @ts-ignore
import i2Img from "../assets/img/executives/e2.png";
// @ts-ignore
import i3Img from "../assets/img/executives/e3.png";
// @ts-ignore
import i4Img from "../assets/img/executives/e4.png";
// @ts-ignore
import i5Img from "../assets/img/executives/e5.png";
const Executives = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center mb-10">L’impact sur les dirigeants :</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        <IconCard
          icon={i1Img}
          color="bg-green-light"
          des="Identifier des opportunités de croissance "
        />
        <IconCard
          icon={i2Img}
          color="bg-warm-dark"
          des="Gagner en clarté concernant les objectifs et élaborer un plan pour les atteindre"
        />
        <IconCard
          icon={i3Img}
          color="bg-green-light"
          des="Gérer le stress et renforcer la résilience"
        />
        <IconCard
          icon={i4Img}
          color="bg-warm-dark"
          des="Améliorer leurs compétences de communication et renforcer leurs relations avec les équipes et les parties prenantes"
        />
        <IconCard
          icon={i5Img}
          color="bg-green-light"
          des="Prendre des décisions efficaces et gérer le changement"
        />
      </div>

      <div className="mt-10">
        <button className="dashboard-button rounded-full bg-black mx-auto">
            En discuter avec un expert du coaching pour dirigeants
        </button>
      </div>
    </div>
  );
};

export default Executives;
