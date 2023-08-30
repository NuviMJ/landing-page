import React from "react";

const YouAreCoach = () => {
  return (
    <div className="section bg-warm-light">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <p className="red-heading">Vous êtes coach ?</p>
          <h2 className="mt-3 lg:mb-10">
            Rejoignez une
            <br /> communauté
            <br /> extraordinaire
          </h2>
        </div>

        <div className="flex-1">
          <p className="mb-8">
            Rejoignez une communauté où vous pouvez partager avec d'autres
            experts et coachs passionnés afin de grandir ensemble. Travailler
            avec Coachello signifie travailler avec des entreprises inspirantes
            et de premier plan. Cela signifie également bénéficier de
            flexibilité. Vous décidez du nombre d'heures que vous souhaitez
            travailler chaque semaine. Concentrez-vous simplement sur ce que
            vous faites de mieux, soutenu par notre technologie. Quoi de plus
            beau que de participer à cette belle mission de rendre le coaching
            accessible à toutes les entreprises, afin de créer un meilleur
            environnement de travail et les préparer aux défis de demain ?
          </p>
          <a href="mailto:livia@coachello.io">
            <button className="dashboard-button bg-black rounded-full">
              En savoir plus et rejoindre notre communauté
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default YouAreCoach;
