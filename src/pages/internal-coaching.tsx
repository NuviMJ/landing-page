import React from "react";
import Navbar from "../sections/Navbar/Navbar";
// @ts-ignore
import Seo from "../utils/seo";
import IndividualCoachingHero from "../sections/IndividualCoachingHero";
import Benefits from "../sections/Benefits";
import Example from "../sections/Example";
import ProgramHelp from "../sections/ProgramHelp";
import Faq from "../sections/Faq/Faq";
import Footer from "../sections/Footer/Footer";
import InternalCoachingHero from "../sections/InternalCoachingHero.";
import CaseStudies from "../sections/CaseStudies";

const InternalCoaching = () => {
  return (
    <>
      <Seo
        title="Coachello - Online Professional Coaching Platform"
        // image={seoImg}
        description="Discover our professional coaching platform. From group workshops to individual coaching, we are here to give you an amazing experience."
      />
      <Navbar />
      <InternalCoachingHero />
      <CaseStudies />

      <Faq />
      <Footer />
    </>
  );
};

export default InternalCoaching;
