import React from "react";
import AssessmentCard from "../components/AssessmentCard";

const Assessment = () => {
  return (
    <>
      {/*section*/}
      <div className="section bg-white">
        <div className="">
          <h2 className="text-center mb-12">
            Gestion des progrès dans le<br /> parcours à la demande
          </h2>
          <div className="grid lg:grid-cols-3 gap-20 items-start">
            <AssessmentCard
              number="1"
              header="Auto-évaluation initiale"
              des="L'évaluation détermine le niveau de satisfaction du coaché vis-à-vis de sa propre performance et de son bien-être dans tous les aspects de son travail avant d'être coaché. C'est la base qui nous permet de mesurer et d'analyser scientifiquement les progrès réalisés."
              color="bg-warm"
            />
            <AssessmentCard
              number="2"
              header="Auto-évaluation des progrès"
              des="Fourni tous les 4 mois pour suivre les progrès et les changements comportementaux au fil du temps. Le coaché évalue lui-même ses propres progrès."
              color="bg-warm-dark"
            />
            <AssessmentCard
              number="3"
              header="Flash Feedback"
              des="Pour recueillir rapidement les feedbacks des collègues sur les pogrès et les principales opportunités de croissance du coaché. Les résultats sont visibles uniquement par le coaché qui les utilisent en responsabilité"
              color="bg-warm"
            />
          </div>
        </div>
      </div>
      {/*section*/}
      <div className="section bg-white">
        <div className="">
          <h2 className="text-center mb-12">
            Gestion des progrès dans le<br /> parcours leadership
          </h2>
          <div className="grid lg:grid-cols-4 gap-10 items-start">
            <AssessmentCard
              number="1"
              header="Comportements de leadership"
              des="L'évaluation détermine le niveau de satisfaction du coaché vis-à-vis de sa propre performance et de son bien-être dans tous les aspects de son travail avant d'être coaché. C'est la base qui nous permet de mesurer et d'analyser scientifiquement les progrès réalisés."
              color="bg-warm"
            />
            <AssessmentCard
              number="2"
              header="Conscience de soi"
              des="Boosté par le Flash Feedback dans MS Teams ou Slack, les leaders recevront des feedbacks précieux de leur entourage professionnel. Les coachés choisissent qui ils consultent et les réponses sont seulement accessibles au coaché."
              color="bg-warm-dark"
            />
            <AssessmentCard
              number="3"
              header="Évaluation d'impact"
              des="Évalue l'impact que le coaching a eu sur les coachés, ainsi que sur leurs pairs à la fin de leur programme."
              color="bg-warm"
            />
            <AssessmentCard
              number="4"
              header="Suivi régulier des changements au fil du temps"
              des="La vie n'est linéaire pour personne, nous prenons régulièrement la température pour voir si un soutien supplémentaire est nécessaire."
              color="bg-warm-dark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessment;
