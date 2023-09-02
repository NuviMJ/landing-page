import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
import "../styles/index.css";
import "../styles/colour.css";
import "../styles/fonts.css";
// @ts-ignore
import LiviaImg from "../assets/img/livia.png";

import Footer from "../sections/Footer";

import CoachFeatures from "../sections/CoachFeaturesFr";
import CoachProfile from "../components/old/CoachProfile/CoachProfile";

import MeetCoaches from "../sections/MeetCoaches/MeetCoachesFr";
import YouAreCoach from "../sections/YouAreCoachFr";
import GlobalExcellence from "../sections/GlobalExcellenceFr";
// @ts-ignore
import Seo from "../utils/seo";
// @ts-ignore
import Layout from "../layouts";
// markup
const CoachesPage = () => {
  return (
    <>
      <Seo title="Coachello - Coaches" />
      <Layout>
        <GlobalExcellence />
        <CoachFeatures />

        {/*Section*/}
        <div className="section bg-warm">
          <div className="flex gap-10 flex-col md:flex-row">
            <img className="lg:w-2/5 object-contain" src={LiviaImg} />
            <div className="p-5">
              <div className="">
                <p className="red-heading">Bonjour !</p>
                <h2 className="mt-3 mb-10">
                  Rencontrez Livia, notre<br /> Responsable Coaching
                </h2>
              </div>
              <p className="my-5">
                Coach certifié ICF PCC, ancienne avocate (Barreau de Paris et
                NY), formatrice soft-skills et mordue de théâtre.
              </p>
              <p className="my-5">
                Compétente, accessible et toujours de bonne humeur pour
                accompagner nos clients dans leur programme de coaching ou de
                formation et recommender les coachs les plus adaptés à leurs
                Talents.
              </p>
              <p className="my-5">
                Vous souhaitez prendre rendez-vous avec Livia ? Veuillez lui
                envoyer un mail à{" "}
                <a className="text-green-500">livia@coachello.io</a>
              </p>
              <button className="dashboard-button bg-black rounded-full">
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        <MeetCoaches />
        <YouAreCoach />
      </Layout>
    </>
  );
};

export default CoachesPage;
