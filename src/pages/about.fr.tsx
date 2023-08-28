import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
import "../styles/index.css";
import "../styles/colour.css";
import "../styles/fonts.css";
// @ts-ignore
import CongueImg from "../assets/img/old/team.png";
// @ts-ignore
import philosopyImg from "../assets/img/philosophy.png";
import "../sections/old/YouAreCoach/YouAreCoach.scss";
import Footer from "../sections/Footer";
import ImgContentTemplateRed from "../components/old/ImgContentTemplateRed/ImgContentTemplateRed";
import CoreTeam from "../sections/old/CoreTeam/CoreTeam";
// @ts-ignore
import Seo from "../utils/seo";
import Human from "../sections/HumanFr";
import Recognition from "../sections/RecognitionFr";
// @ts-ignore
import Layout from "../layouts";

const AboutPage = () => {
  return (
    <>
      <Seo title="Coachello - About Us" />
      <Layout>
        <div className="section bg-warm">
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <div className="lg:w-1/2 flex flex-col items-start justify-center">
              <h1 className="leading-[1.3] mb-8">
                À propos de<br/> Coachello
              </h1>
            </div>
            <div className="lg:w-1/2">
              <img style={{ maxWidth: "100%" }} src={CongueImg} />
            </div>
          </div>
        </div>

        <Human />

        <div className="section bg-warm">
          <div className="flex gap-10">
            <img className="w-2/5 object-contain" src={philosopyImg} />
            <div className="p-16">
              <div className="">
                <p className="red-heading">notre philosophie</p>
                <h2 className="mt-3 mb-10">
                  {" "}
                  Permettre à toutes les organisations à travers le monde d'intégrer le coaching dans leur environnement de travail pour accompagner les leaders de demain.
                </h2>
              </div>
              <p>
                Nous sommes animés par les connexions humaines, mais aussi propulsés par l'innovation technologique et fortement orientés par les données.
              </p>
              <button className="YouAreCoach-button">
                Parlons de votre projet !
              </button>
            </div>
          </div>
        </div>

        <Recognition />
      </Layout>
    </>
  );
};

export default AboutPage;
