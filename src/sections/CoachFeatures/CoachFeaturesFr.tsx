import React from "react";
import "./CoachFeatures.scss";

// @ts-ignore
import certifiedIcon from "../../assets/img/features/certified.png";
// @ts-ignore
import communityIcon from "../../assets/img/features/ommunity.png";
// @ts-ignore
import diversifiedIcon from "../../assets/img/features/diversified.png";
// @ts-ignore
import videoIcon from "../../assets/img/features/video.png";
import CoachFeatureCard from "../../components/old/CoachFeatureCard/CoachFeatureCard";

const CoachFeatures = () => {
  return (
    <div className="CoachFeatures section bg-white">
      <h2 className="text-center"> Nos coachs</h2>

      <div>
        <div>
          <CoachFeatureCard
            header="Certifiés et supervisés"
            des={
              <>
                <p>
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
            header="Diversified and International"
            des={
              <>
                <p>
                  We have a coach for every profile. Someone needing support on
                  their leadership skills will not have the same coach as
                  someone looking for psychological support.
                </p>
                <p>
                  {" "}
                  Our coaches are based on 4 continents and speak over 25
                  languages like English, French, German, Spanish, Italian,
                  Dutch, Swedish, Norwegian, Serbian, Romanian, Cantonese,
                  Mandarin.
                </p>
              </>
            }
            icon={diversifiedIcon}
          />
        </div>

        <div>
          <CoachFeatureCard
            header="Trained in video coaching"
            des={
              <>
                <p>
                  All our coaches have been trained to master video coaching
                  sessions. They respect coaching deontology and our ethical
                  chart.
                </p>
                <p>
                  {" "}
                  They provide you flexibility in the tools they used: Zoom,
                  Teams, Whereby…
                </p>
              </>
            }
            icon={videoIcon}
          />
        </div>
        <div>
          <CoachFeatureCard
            header="Community"
            des={
              <>
                <p>
                  All our coaches are part of our community to enhance
                  co-development, improve skills and strengthen the quality of
                  individual coachings. We regularly organise events, webinars
                  and co-create content. We believe in collaboration to grow
                  together as one team. Also, we all have the same mission: make
                  coaching accessible.
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
