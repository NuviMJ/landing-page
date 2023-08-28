import React from "react";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/support/1.png";
// @ts-ignore
import i2Img from "../assets/img/support/2.png";
// @ts-ignore
import i3Img from "../assets/img/support/3.png";
// @ts-ignore
import i4Img from "../assets/img/support/4.png";
// @ts-ignore
import i5Img from "../assets/img/support/5.png";
// @ts-ignore
import i6Img from "../assets/img/support/6.png";
// @ts-ignore
import i7Img from "../assets/img/support/7.png";
// @ts-ignore
import i8Img from "../assets/img/support/8.png";
// @ts-ignore
import i11Img from "../assets/img/support/11.png";
// @ts-ignore
import i22Img from "../assets/img/support/22.png";
// @ts-ignore
import i33Img from "../assets/img/support/33.png";
// @ts-ignore
import i44Img from "../assets/img/support/44.png";
// @ts-ignore
import i55Img from "../assets/img/support/55.png";
// @ts-ignore
import i66Img from "../assets/img/support/66.png";
// @ts-ignore
import i77Img from "../assets/img/support/77.png";
// @ts-ignore
import i88Img from "../assets/img/support/88.png";

const Support = () => {
  return (
    <>
      <div className="section bg-white">
        <h2 className="text-center mb-5">
          Coaching à la demande :
        </h2>
        <p className="text-center mb-10">
          Nous soutenons l'ensemble des professionnels dans tous leurs défis, quels qu'ils soient :
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <IconCard
            icon={i1Img}
            header="Développement de carrière"
            color="bg-green-light"
            des="Transition de carrière, planification de carrière, sens au travail, syndrome de l'imposteur"
          />
          <IconCard
            header="Environnement de travail"
            icon={i2Img}
            color="bg-warm-dark"
            des="Environnement de travail hybride, influence et réseautage, intelligence collective, adaptabilité au changement"
          />
          <IconCard
            header="Performance au travail"
            icon={i3Img}
            color="bg-green-light"
            des="Prise de parole en public, productivité, gestion du temps, feedback et reconnaissance"
          />
          <IconCard
            header="Leadership"
            icon={i4Img}
            color="bg-warm-dark"
            des="Posture naturelle de leadership, compétences managériales, authenticité, posture manager-coach"
          />
          <IconCard
            header="Communication"
            icon={i5Img}
            color="bg-warm-dark"
            des="Affirmation de soi, empathie, compétences d'écoute, gestion des conflits"
          />
          <IconCard
            header="Qualité de vie"
            icon={i6Img}
            color="bg-green-light"
            des="Centres d'intérêt, motivation, relation au travail, équilibre vie professionnelle et personnelle"
          />
          <IconCard
            header="Conscience de soi"
            icon={i7Img}
            color="bg-warm-dark"
            des="Besoin de performance, identification des valeurs, exploration des forces, découverte des zones d'ombre"
          />
          <IconCard
            header="Stress et anxiété"
            icon={i8Img}
            color="bg-green-light"
            des="Gestion du stress et de l'anxiété, amélioration du bien-être, résilience, prévention du burn-out"
          />
        </div>
      </div>
      <div className="section bg-white">
        <h2 className="text-center mb-5">
          Coaching en leadership :
        </h2>
        <p className="text-center mb-5">
          Avec l'aide de notre communauté internationale de coachs certifiés + en nous basant sur les dernières recherches scientifiques en la matière, nous avons identifié 10 comportements à travailler par les leaders.
          <br />
          Nous pouvons personnaliser ces comportements en intégrant votre modèle de leadership
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <IconCard
            icon={i11Img}
            header="Ouverture"
            color="bg-green-light"
            des="Est curieux et ouvert aux nouvelles idées"
          />
          <IconCard
            header="Engagement"
            icon={i22Img}
            color="bg-warm-dark"
            des="Fixe des objectifs et s’engage à les atteindre"
          />
          <IconCard
            header="Vision"
            icon={i33Img}
            color="bg-green-light"
            des="Construit une vision à long terme"
          />
          <IconCard
            header="Émancipation"
            icon={i44Img}
            color="bg-warm-dark"
            des="Permet à leur équipe et à leurs employés de performer"
          />
          <IconCard
            header="Compétence"
            icon={i55Img}
            color="bg-warm-dark"
            des="Est un expert ainsi qu'un leader"
          />
          <IconCard
            header="Authenticité"
            icon={i66Img}
            color="bg-green-light"
            des="Aligne ses actions et son discours"
          />
          <IconCard
            header="Collaboration"
            icon={i77Img}
            color="bg-warm-dark"
            des="A une attitude de travail inclusive"
          />
          <IconCard
            header="RSE"
            icon={i88Img}
            color="bg-green-light"
            des="Responsabilité éthique et sociale d’agir en pensant à toutes les parties prenantes"
          />
        </div>
      </div>
    </>
  );
};

export default Support;
