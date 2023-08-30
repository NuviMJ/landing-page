import React from "react";
import { CheckOne } from "@icon-park/react";
// @ts-ignore
import heroImg from "../assets/img/methodoly.png";
// @ts-ignore
import methodImg from "../assets/img/method.png";
// @ts-ignore
import sessionImg from "../assets/img/coaching-session.png";
// @ts-ignore
import coachesImg from "../assets/img/coaches.png";
import Assessment from "../sections/AssessmentFr";
import Support from "../sections/SupportFr";
// @ts-ignore
import Layout from "../layouts";
import { GreenTick } from "../components/GreenTick";

const Methodology = () => {
  return (
    <>
      <Layout>
        {/*section*/}
        <div className="section bg-warm">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 flex flex-col items-start justify-center">
              <h1 className="leading-[1.3] mb-8">La méthodologie Coachello</h1>

              <ul className="flex flex-col gap-3 pl-0 ">
                <span className="font-normal mb-5">
                  Le coaching est un processus de développement des individus
                  visant à atteindre des objectifs concrets. De nombreuses
                  études ont maintenant démontré ses effets positifs sur le
                  développement de la performance et du bien-être de manière
                  durable . Le coaching est associé à une amélioration des
                  aspects suivants :
                </span>

                <li className="icon-text">
                  <GreenTick />

                  <span>
                    <b className="font-semibold">Auto-efficacité :</b> La
                    croyance et la confiance en ses capacités à surmonter ses
                    défis avec ses propres ressources.
                  </span>
                </li>
                <li className="icon-text">
                  <GreenTick />
                  <span>
                    <b className="font-semibold">Espoir :</b> Un état de
                    motivation caractérisé par un sentiment d'initiative dans la
                    poursuite des objectifs.
                  </span>
                </li>
                <li className="icon-text">
                  <GreenTick />
                  <span>
                    <b className="font-semibold">Optimisme :</b> Une attribution
                    positive concernant le futur, les recherches suggèrent que
                    les personnes coachées développent cette mentalité grâce à
                    des interventions axées sur l'expression de leur plein
                    potentiel.
                  </span>
                </li>
                <li className="icon-text">
                  <GreenTick />
                  <span>
                    <b className="font-semibold">Résilience :</b> La capacité à
                    rebondir rapidement et efficacement face à des circonstances
                    défavorables. Les coachs facilitent ces deux comportements
                    en agissant comme un point d'appui constant et stable, ainsi
                    qu'en aidant les personnes coachées à faire face à ces
                    situations grâce à la réévaluation cognitive.
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img style={{ maxWidth: "100%" }} src={heroImg} />
            </div>
          </div>
        </div>
        {/*section*/}
        <div className="section bg-white flex md:gap-24 flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="mb-10">
              La Méthode
              <br /> Coachello
            </h2>
            <p className="mb-5">
              Coachello combine l’humain, l’IA et la technologie pour augmenter
              l'efficacité et le bien-être des leaders à tous les niveaux grâce
              au coaching individuel avec une approche orientée résultat.
            </p>
          </div>
          <div className="flex-1">
            <svg
              width="73"
              height="51"
              viewBox="0 0 73 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.0714 0L15.6429 20.4H31.2857V51H0V20.4L10.4286 0H26.0714ZM67.7857 0L57.3571 20.4H73V51H41.7143V20.4L52.1429 0H67.7857Z"
                fill="#FECBC4"
              />
            </svg>

            <h3 className="my-5">
              Coachello offre un accompagnement personnalisé qui place la
              technologie et l’IA au service de l’Humain.
            </h3>
          </div>
        </div>

        {/*section*/}
        <div className="section bg-white flex gap-20 flex-col md:flex-row">
          <div className="flex-1">
            <img src={methodImg} className="w-full" />
          </div>
          <div className="flex-1">
            <h2 className="md:my-5">Comment ça marche</h2>
            <p className="my-5">
              Les coachés utilisent nos applications MS Teams ou Slack pour
              accéder à du coaching asynchrone ainsi qu'à des séances de
              coaching 1:1 en direct avec un coach professionnel certifié.
              L’application permet une auto-évaluation de leurs besoins en
              coaching et une demande de feedbacks à leurs pairs les renseignant
              sur leurs forces et leurs opportunités de croissance. Chaque
              programme est entièrement personnalisé. Nous utilisons une
              combinaison d'IA et de soutien humain pour optimiser la mise en
              relation entre le coach et le coaché. Nous sommes ensuite en
              mesure de fournir aux organisations des données agrégées et
              anonymisées sur les progrès des coachés.
            </p>
            <b className="">Nous avons conçu 2 programmes : </b>
            <div className="flex gap-5 my-5">
              <div className="p-5 bg-warm rounded flex-1">
                <b className="my-5">Coaching en leadership</b>
                <p className="my-5">
                  Conçu pour travailler sur les comportements liés au leadership{" "}
                </p>
              </div>
              <div className="p-5 bg-warm rounded flex-1">
                <b className="my-5">Coaching à la demande</b>
                <p className="my-5">
                  Conçu pour travailler sur tout sujet professionnel important
                  pour la personne coachée{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Assessment />
        {/*section*/}
        <div className="section bg-green-light">
          <h2 className="mb-10">Les catégories de coaching </h2>

          <div className="">
            <p className="my-5">Scientific analysis</p>
            <p className="my-5">
              Les sujets et objectifs de coaching sont par définition infinis
              puisqu’ils sont 100% personnalisés pour chaque coaché. Tenter de
              les catégoriser n’est donc pas une tâche facile.
              <br />
              Nos experts ont agrégé et analysé les objectifs de coaching
              provenant de milliers de séances Coachello pour lister les sujets
              les plus souvent abordés. Les objectifs ont été classés en 32
              sous-catégories, elles-mêmes regroupées en 8 catégories de sujets
              de coaching.
              <br />
              A chaque séance, le coach et le coaché pouront ensemble, lier
              l’objectif de séance à l’une de ces 8 catégories de sujets de
              coaching. Cela permet au coaché de suivre ses progrès sur un sujet
              donné et de replacer ses objectifs individuels de coaching dans le
              contexte plus large, des objectifs poursuivis par son
              organisation.
              <br />
              Ce suivi permet par ailleurs au client d’avoir des données sur les
              sujets les plus abordés en séance (de manière agrégée et anonyme
              pour préserver la confidentialité des séances), d’identifier
              d’éventuels besoins en accompagnement sur ces sujets et d’y
              répondre par la mise en place de plans d’action (formations, group
              coaching etc.)
            </p>
          </div>
        </div>

        <Support />

        {/*section*/}
        <div className="section bg-warm flex gap-20 flex-col md:flex-row">
          <div className="flex-1">
            <img src={sessionImg} className="w-full" />
          </div>
          <div className="flex-1">
            <h2 className="md:my-5">Confidentialité des séances :</h2>
            <p className="my-5">
              Elles sont entièrement confidentielles. Rien de ce qui est dit en
              séance ne sera partagé à personne en dehors des séances. Ceci est
              une obligation déontologique à laquelle les coachs et coachello se
              soumettent intégralement. Lorsque suffisamment de coachés ont
              effectué suffisamment de séances pour nous le permettre, les
              organisations reçoivent des données agrégées et anonymisées sur le
              développement, la croissance et les changements comportementaux
              observés lors des coachings sur une population générale.
              <br />
              Bien que le nombre de séances nécessaires dépende de chaque coaché
              et de l’objectig souhaité par l’organisation, nous recommandons 6
              à 8 séances pour un travail efficace, profond et durable. Les
              études scientifiques sur le coaching tendent à démontrer que la
              relation peut devenir conversationnelle avec des licences
              illimitées.
            </p>
          </div>
        </div>

        {/*section*/}
        <div className="section bg-white">
          <h2 className="mb-10">Structure des séances:</h2>
          <p className="my-5">
            Nos coachs suivent la structure de séance dite “GROW” mais restent
            attentifs aux besoins personnalisés de leur coaché
          </p>
          <div className="flex flex-col gap-8 md:w-1/2">
            <div className="flex gap-5 items-center">
              <h3 className="font-bold uppercase ">G</h3>
              <p>Établissement d'objectifs ou Goals</p>
            </div>
            <div className="flex gap-5 items-center">
              <h3 className="font-bold uppercase ">R</h3>
              <p>
                Exploration de la Réalité du coaching à travers des questions
                puissantes et des exercices jugés pertinents à ce moment-là, ce
                qui permet de faire émerger la prise de conscience. Le coaché
                prend conscience d'une nouvelle possibilité, d'une nouvelle
                option à laquelle il/elle n'avait jamais pensé
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <h3 className="font-bold uppercase ">O</h3>
              <p>
                L'exploration des Options que le coaché peut mettre en place
                pour atteindre son objectif fait suite à sa prise de conscience,
                et enfin
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <h3 className="font-bold uppercase ">W</h3>
              <p>
                La volonté ou Will, l'engagement envers un plan d'action concret
                dont le coach vérifie la faisabilité, la motivation du coaché à
                le réaliser et la possibilité concrète de le faire.
              </p>
            </div>
          </div>{" "}
          <p className="my-5">
            A l’intérieur de cette structure, les coachs mobilisent tous les
            outils, exercices et supports pertinents pour leur coaché à un
            moment donné et dans une situation donnée. Ils travaillent sur leurs
            croyances, leurs valeurs, leurs besoins en balayant les sphères
            mentales, émotionnelles et corporelles. Les coachés améliorent leur
            connaissance d’eux-mêmes, prennent conscience de leurs ressources
            mobilisables pour l’atteinte de leurs objectifs par l’éalobartion de
            plans d’action concrets.
          </p>
        </div>

        {/*section*/}
        <div className="section bg-orange-light flex gap-10 flex-col md:flex-row">
          <div className="flex-1"></div>
          <div className="flex-1">
            <h2 className="mb-10">Gestion des progrès</h2>
            <p className="my-5">
              Après avoir entamé un travail en coaching, le coaché pourra
              régulièrement ré-évaluer son niveau de satisfaction dans
              différents domaines de sa vie professionnelle de manière à mettre
              en évidence les changements, progrès résultant du coaching et les
              domaines qui restent à travailler. Les résultats de cette
              évaluation périodique reste à la seule discrétion du coaché.
            </p>
          </div>
        </div>

        {/*section*/}
        <div className="section bg-white">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 flex flex-col items-start justify-center">
              <h1 className="leading-[1.3] mb-8">Les Coachs Coachello</h1>
              <p>
                Nos coachs sont tous certifiés par l’ICF, ont réalisé plus de
                500 heures de coaching, se forment continuellement à de nouveaux
                outils et sont tous supervisés dans leur pratique. Ils ont
                également tous eu des carrières professionnels riches dans
                diverses industries à des hauts postes. Profondément humanistes,
                ils sont tous animés par la même envie de faire grandir leurs
                coachés. Nous animons cette communauté en continu et veillons à
                garder une haute qualité de coaching et de déontologie dans nos
                séances.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img style={{ maxWidth: "100%" }} src={coachesImg} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Methodology;
