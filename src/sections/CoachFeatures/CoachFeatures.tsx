import React from 'react';
import './CoachFeatures.scss'

// @ts-ignore
import certifiedIcon from "../../assets/img/features/certified.svg";
// @ts-ignore
import communityIcon from "../../assets/img/features/community.svg";
// @ts-ignore
import diversifiedIcon from "../../assets/img/features/diversified.svg";
// @ts-ignore
import videoIcon from "../../assets/img/features/video.svg";
import CoachFeatureCard from "../../components/CoachFeatureCard/CoachFeatureCard";

const CoachFeatures = () => {
    return (
        <div className="CoachFeatures">
            <div>
                <div>
                    <CoachFeatureCard
                                      header="Certified and supervised"
                                      des={<><p>All our coaches are certified by the world’s leading coaching
                                          associations and trained following the ICF methodology. They adhere to the ICF
                                          and Coachello deontology of coaching.
                                      </p><p>They are experienced and all have their own domain of expertise to match
                                          with each of your employees’ specifics needs. They each bank on at least five
                                          years of previous professional experience that will be visible to your
                                          talents.</p>
                                      </>}
                                      icon={certifiedIcon}/></div>
                <div><CoachFeatureCard
                                       header="Diversified and International"
                                       des={<><p>We have a coach for every profile. Someone needing support on their
                                           leadership skills will not have the same coach as someone looking for
                                           psychological support.
                                       </p><p> Our coaches are based on 4 continents and speak over 25 languages like
                                           English, French, German, Spanish, Italian, Dutch, Swedish, Norwegian,
                                           Serbian, Romanian, Cantonese, Mandarin.</p>
                                       </>}

                                       icon={diversifiedIcon}/></div>

                <div><CoachFeatureCard
                                       header="Trained in video coaching"
                                       des={<><p>All our coaches have been trained to master video coaching sessions.
                                           They respect coaching deontology and our ethical chart.
                                       </p><p> They provide you flexibility in the tools they used: Zoom, Teams,
                                           Whereby…
                                       </p>
                                       </>}
                                       icon={videoIcon}/></div>
                <div><CoachFeatureCard
                                       header="Community"
                                       des={<><p>All our coaches are part of our community to enhance co-development,
                                           improve skills and strengthen the quality of individual coachings. We
                                           regularly organise events, webinars and co-create content. We believe in
                                           collaboration to grow together as one team. Also, we all have the same
                                           mission: make coaching accessible.</p>
                                       </>}
                                       icon={communityIcon}/></div>

            </div>
            <a href="mailto:livia@coachello.io">
                <button className="CoachFeatures-button">Lean More</button>
            </a>
            </div>


    )
        ;
};

export default CoachFeatures;
