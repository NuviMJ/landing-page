import React from "react";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/about/1.png";
// @ts-ignore
import i2Img from "../assets/img/about/2.png";
// @ts-ignore
import i3Img from "../assets/img/about/3.png";

const Human = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center my-10">Technologie et IA au service <br />de l’Humain</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-28">
        <IconCard
          icon={i1Img}
          header={"Humain"}
          color="bg-green-light"
          des="Accompagnement humain et personnalisé pour s’adapter aux enjeux et à a culture de chaque entreprise"
        />
        <IconCard
          icon={i2Img}
          header={"Technologie"}
          color="bg-warm-dark"
          des="Intégré dans le milieu de travail de vos leaders"
        />
        <IconCard
          icon={i3Img}
          header={"Données"}
          color="bg-green-light"
          des="Mise à disposition des progrès agrégés de la transformation individuelle et du changement de comportement"
        />
      </div>
    </div>
  );
};

export default Human;
