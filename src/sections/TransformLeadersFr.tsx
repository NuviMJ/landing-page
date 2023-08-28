import React from "react";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/leaders/transform.png";
// @ts-ignore
import i2Img from "../assets/img/leaders/transform2.png";
// @ts-ignore
import i3Img from "../assets/img/leaders/transform3.png";
// @ts-ignore
import i4Img from "../assets/img/leaders/transform4.png";
const TransformLeaders = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center mb-8">
          Transformez vos leaders avec
        <br /> Coachello
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <IconCard
          icon={i1Img}
          header={"Coaching individuel"}
          color="bg-green-light"
          des="Coaching 1:1 intégré dans l'environnement de travail de vos leaders"
        />
        <IconCard
          icon={i2Img}
          header={"Ateliers de groupe"}
          color="bg-warm-dark"
          des="Coaching de groupe, co-développement, DISC, formations soft-skills "
        />
        <IconCard
          icon={i3Img}
          header={"Coaching interne"}
          color="bg-green-light"
          des="La solution Coachello pour dynamiser vos programmes de coaching interne."
        />
        <IconCard
          icon={i4Img}
          header={"Coaching de dirigeants"}
          color="bg-warm-dark"
          des="Coachs C-Levels pour dirigeants"
        />
      </div>
    </div>
  );
};

export default TransformLeaders;
