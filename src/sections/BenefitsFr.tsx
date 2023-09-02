import React from "react";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/benefit/benefit1.png";
// @ts-ignore
import i2Img from "../assets/img/benefit/benefit2.png";
// @ts-ignore
import i3Img from "../assets/img/benefit/benefit3.png";
// @ts-ignore
import i4Img from "../assets/img/benefit/benefit4.png";
const Benefits = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center mb-2">Pourquoi Coachello ?</h2>
        <h4 className="text-center mb-8">La technologie et l'IA au service de l'humain</h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <IconCard
          icon={i1Img}
          des={
            "Accès simple et expérience fluide grâce à l’intégration Microsoft Teams ou Slack"
          }
          color="bg-green-light"
        />
        <IconCard
          icon={i2Img}
          des={
            "Piloter, Mesurer et agir, grâce au Dashboard RH accessible en continu"
          }
          color="bg-warm-dark"
        />
        <IconCard
          icon={i3Img}
          des={
            "Accompagnement en continu, depuis le choix du coach jusqu’à la fin du coaching (auto-évaluations, suivi des progrès, bibliothèque de ressources, chat en continu...)"
          }
          color="bg-green-light"
        />
        <IconCard
          icon={i4Img}
          des={
            "Personalisation des programmes et alignement avec votre modèle leadership"
          }
          color="bg-warm-dark"
        />
      </div>
    </div>
  );
};

export default Benefits;