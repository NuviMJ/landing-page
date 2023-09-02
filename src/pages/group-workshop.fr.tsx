import React from "react";
// @ts-ignore
import heroImg from "../assets/img/group-workshop.png";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/group-workshop/c1.png";
// @ts-ignore
import i2Img from "../assets/img/group-workshop/c2.png";
// @ts-ignore
import i3Img from "../assets/img/group-workshop/c3.png";
// @ts-ignore
import i4Img from "../assets/img/group-workshop/c4.png";
import Faq from "../sections/FaqFr";
// @ts-ignore
import Layout from "../layouts";
import { GreenTick } from "../components/GreenTick";
import GetInTouch from "../sections/GetInTouchFr";
const GroupWorkshop = () => {
  return (
    <>
      <Layout>
        {/*section*/}
        <div className="section bg-warm">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 flex flex-col items-start justify-center">
              <h1 className="leading-[1.3] mb-8">Ateliers <br />collectifs</h1>

              <ul className="flex flex-col gap-3 pl-0 ">
                <span className="font-semibold mb-5">
                  Ateliers collectifs sur mesure
                </span>

                <li className="icon-text">
                  <GreenTick />
                  Renforcer les relations entre vos leaders et la culture de
                  l'entreprise
                </li>
                <li className="icon-text">
                  <GreenTick />
                  Renforcer la cohésion, la collaboration et la productivité
                </li>
                <li className="icon-text">
                  <GreenTick />
                  Construire une culture managériale commune
                </li>
                <li className="icon-text">
                  <GreenTick />
                  Utiliser l'intelligence collective
                </li>
                <li className="icon-text">
                  <GreenTick />
                  Donner du sens
                </li>
                <li className="icon-text">
                  <GreenTick />
                  Résoudre les conflits
                </li>
              </ul>
            </div>
            <div className="lg:w-2/5">
              <img style={{ maxWidth: "100%" }} src={heroImg} />
            </div>
          </div>
        </div>

        {/*Section*/}
        <div className="section bg-white">
          <h2 className="text-center mb-8">Études de cas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <IconCard
              icon={i1Img}
              header={"DISC"}
              color="bg-green-light"
              des="<b>Qonto</b> offre à chaque équipe l'opportunité de réaliser une évaluation DISC lors des réunions hors site afin d'améliorer la communication"
            />
            <IconCard
              icon={i2Img}
              header={"Prise de parole"}
              color="bg-warm-dark"
              des="<b>Virtuo</b> travaille avec Coachello pour tous les ateliers de prise de parole en public en français et en anglais afin de renforcer les compétences de chaque talent"
            />
            <IconCard
              icon={i3Img}
              header={"Formation en management"}
              color="bg-green-light"
              des="<b>Amplitude Studios</b> a formé tous ses managers avec l'atelier 'Le manager du futur' de Coachello pour créer une culture managériale commune"
            />
            <IconCard
              icon={i4Img}
              header={"Co-développement"}
              color="bg-warm-dark"
              des="<b>Qonto</b> forme ses HRBP sur la méthodologie de co-développement, afin de le transmettre au sein de l'entreprise"
            />
          </div>
        </div>

        <GetInTouch />
        <Faq />
      </Layout>
    </>
  );
};

export default GroupWorkshop;
