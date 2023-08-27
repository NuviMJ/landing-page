import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
import "../styles/index.css";
import "../styles/colour.css";
import "../styles/fonts.css";
// @ts-ignore
import caseStudiesImg from "../assets/img/old/caseStudies.png";
// @ts-ignore
import philosopyImg from "../assets/img/old/philosophy.png";

import Footer from "../sections/Footer";
import ImgContentTemplateRed from "../components/old/ImgContentTemplateRed/ImgContentTemplateRed";
import CoreTeam from "../sections/old/CoreTeam/CoreTeam";
import What from "../sections/old/What/What";
import CaseVideos from "../sections/old/CaseVideos/CaseVideos";
import WhatYouGetTemplate from "../components/old/WhatYouGetTemplate/WhatYouGetTemplate";

// @ts-ignore
import certifiedIcon from "../assets/img/features/certified.svg";
// @ts-ignore
import Seo from "../utils/seo";
import CompaniesStudy from "../sections/old/CompaniesStudy/CompaniesStudy";

const CaseStudiesPage = () => {
  return (
    <>
      <Seo title="Coachello - Case Studies" />
      <Navbar />

      <ImgContentTemplateRed
        img={caseStudiesImg}
        redTitle="Case studies"
        titleE={
          <h1>
            Don’t take our word for it, take the word from our clients and their
            talents.
          </h1>
        }
      />
      <CompaniesStudy />
      {/*<CaseVideos/>*/}
      <What />

      <Footer />
    </>
  );
};

export default CaseStudiesPage;
