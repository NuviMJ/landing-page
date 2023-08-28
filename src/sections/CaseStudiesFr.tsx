import React from "react";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/case-studies/case1.png";
// @ts-ignore
import i2Img from "../assets/img/case-studies/case2.png";
// @ts-ignore
import i3Img from "../assets/img/case-studies/case3.png";
// @ts-ignore
import i4Img from "../assets/img/case-studies/case4.png";
const CaseStudies = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center mb-8">Études de cas</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <IconCard
          icon={i1Img}
          header={"Éducation"}
          color="bg-green-light"
          des="HEC Paris a intégré Coachello dans les programmes MBA/EMBA pour améliorer la mise en relation entre un coach leadership et un coaché et mieux suivre les programmes."
        />
        <IconCard
          icon={i2Img}
          header={"Coaching interne "}
          color="bg-warm-dark"
          des="Une entreprise de Télécom au Royaume-Uni utilise Coachello pour piloter son programme de coaching interne (avec plus de 80 coachs internes), améliorer l’expérience des coachés et des coachs et mesurer l’impact des programmes avec leur Tableau de Bord et des KPI’s personnalisés."
        />
        <IconCard
          icon={i3Img}
          header={"Programme de Mentoring"}
          color="bg-green-light"
          des="Une scale-up française a utilisé Coachello pour développer un programme de mentoring interne"
        />
        <IconCard
          icon={i4Img}
          header={"Cabinets de conseils RH"}
          color="bg-warm-dark"
          des="Une société de conseil en transformation RH utilise Coachello pour digitaliser l’expérience qu’elle offre à ses clients "
        />
      </div>

      <div className="mt-10">
        <button className="dashboard-button rounded-full bg-black mx-auto">
            Je voudrais discuter de mon projet
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
