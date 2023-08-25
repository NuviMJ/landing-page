import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
import "../styles/index.css";
import "../styles/colour.css";
import "../styles/fonts.css";
// @ts-ignore
import CongueImg from "../assets/img/old/team.png";
// @ts-ignore
import philosopyImg from "../assets/img/old/philosophy.png";
import "../sections/old/YouAreCoach/YouAreCoach.scss";
import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/old/ImgContentTemplateRed/ImgContentTemplateRed";
import CoreTeam from "../sections/old/CoreTeam/CoreTeam";
// @ts-ignore
import Seo from "../utils/seo";
import Human from "../sections/Human";
import Recognition from "../sections/Recognition";

const AboutPage = () => {
  return (
    <>
      <Seo title="Coachello - About Us" />
      <Navbar />
      <ImgContentTemplateRed
        img={CongueImg}
        redTitle="Coachello"
        titleE={<h1>About Coachello</h1>}
        desE={<></>}
      />
      <Human />
      <ImgContentTemplateRed
        img={philosopyImg}
        redTitle="Our Philosophy"
        titleE={
          <h2>
            To allow every organization around the globe to have coaching
            embedded in the workplace so that they can be sustainable on all
            aspects
          </h2>
        }
        desE={
          <>
            <p>
              We are driven by human connections but propelled by technical
              innovation and are highly data driven.
            </p>
            <button className="YouAreCoach-button">
              Let's discuss your project!
            </button>
          </>
        }
      />
      <Recognition />
      <Footer />
    </>
  );
};

export default AboutPage;
