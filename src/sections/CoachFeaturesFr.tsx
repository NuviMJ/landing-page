import React from "react";

// @ts-ignore
import certifiedIcon from "../assets/img/features/certified.png";
// @ts-ignore
import communityIcon from "../assets/img/features/ommunity.png";
// @ts-ignore
import diversifiedIcon from "../assets/img/features/diversified.png";
// @ts-ignore
import videoIcon from "../assets/img/features/video.png";
import CoachFeatureCard from "../components/CoachFeatureCard";

const CoachFeatures = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center mb-8"> Nos coachs</h2>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <CoachFeatureCard
            header="Certifiés et supervisés"
            des={
              <>
                <p className="my-5">
                  Tous nos coachs sont certifiés par les principales associations mondiales de coaching et formés selon la méthodologie de l'ICF. Ils adhèrent à la déontologie du coaching de l'ICF et de Coachello.
                </p>
                <p>
                  Ils sont expérimentés et possèdent chacun leur domaine d'expertise pour répondre aux besoins spécifiques de chacun de vos employés. Ils bénéficient tous d'au moins dix ans d'expérience professionnelles antérieures dans différents secteurs.
                </p>
              </>
            }
            icon={certifiedIcon}
          />
        </div>
        <div>
          <CoachFeatureCard
            header="Diversifiés et multi-culturels"
            des={
              <>
                <p className="my-5">
                  Nous avons un coach pour chaque profil. Une personne ayant besoin de soutien pour développer ses compétences en leadership n'aura pas le même coach qu'une personne recherchant un soutien psychologique.
                  </p>
                <p>
                  Nos coachs sont basés sur 5 continents et parlent plus de 25 langues et notamment: l'anglais, le français, l'allemand, l'espagnol, l'italien, le néerlandais, le suédois, le norvégien, le serbe, le roumain, le cantonais et le mandarin.
                </p>
              </>
            }
            icon={diversifiedIcon}
          />
        </div>

        <div>
          <CoachFeatureCard
            header="Formés au coaching vidéo"
            des={
              <>
                <p className="my-5">
                  Tous nos coachs sont formés pour le coaching en ligne. Ils respectent la déontologie du coaching et notre charte éthique.
                  </p>
                <p>
                  Les séances se font en ligne via Microsoft Teams, Google Meets, Zoom...
                </p>
              </>
            }
            icon={videoIcon}
          />
        </div>
        <div>
          <CoachFeatureCard
            header="Communauté"
            des={
              <>
                <p className="my-5">
                  Tous nos coachs font partie d’une communauté soudée afin de favoriser le co-développement, améliorer leurs compétences et renforcer la qualité des accompagnements individuels. Nous organisons régulièrement des événements, des webinaires et nous co-créons du contenu. Nous croyons en la collaboration pour grandir ensemble en tant qu'entreprise De plus, nous partageons tous la même mission : rendre le coaching accessible.
                </p>
              </>
            }
            icon={communityIcon}
          />
        </div>
      </div>
      {/*<a href="mailto:livia@coachello.io">*/}
      {/*  <button className="CoachFeatures-button">Learn More</button>*/}
      {/*</a>*/}
    </div>
  );
};

export default CoachFeatures;
