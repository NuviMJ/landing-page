import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
import "../styles/index.css";
import "../styles/colour.css";
import "../styles/fonts.css";
// @ts-ignore
import LiviaImg from "../assets/img/livia.png";

import Footer from "../sections/Footer";

import CoachFeatures from "../sections/CoachFeatures";
import CoachProfile from "../components/old/CoachProfile/CoachProfile";

import MeetCoaches from "../sections/MeetCoaches/MeetCoaches";
import YouAreCoach from "../sections/YouAreCoach";
import GlobalExcellence from "../sections/GlobalExcellence";
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
          <div className="flex gap-10">
            <img className="w-2/5 object-contain" src={LiviaImg} />
            <div className="p-5">
              <div className="">
                <p className="red-heading">HEY !</p>
                <h2 className="mt-3 mb-10">Meet Livia, our Head of Coaching</h2>
              </div>
              <p className="my-5">
                ICF PCC qualified coach, former top tier lawyer (Paris & NY
                Bar), trainer and theatre actress. Is there anything she cannot
                do? Not that we can think of.
              </p>
              <p className="my-5">
                Knowledgeable, approachable and always in a good mood to advice
                our clients on their (individual) coaching programs.
                Furthermore, she animes our pool of coaches and helps onboard
                our clients.
              </p>
              <p className="my-5">
                Want to book a meeting with me? Please send me an email at{" "}
                <a className="text-green-500">livia@coachello.io</a>
              </p>
              <button className="dashboard-button bg-black rounded-full">
                Learn more
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
