import React from "react";
import Navbar from "../sections/Navbar/Navbar";
import InternalCoachingHero from "../sections/InternalCoachingHero.";
import CaseStudies from "../sections/CaseStudies";
import Faq from "../sections/Faq/Faq";
import Footer from "../sections/Footer/Footer";
// @ts-ignore
import Seo from "../utils/seo";
import ExecutiveCoachingHero from "../sections/ExecutiveCoachingHero";
import Executives from "../sections/Executives";
import ExecutiveCoaches from "../sections/ExecutiveCoaches";
import What from "../sections/What";
const ExecutiveCoaching = () => {
  return (
    <>
      <Seo
        title="Coachello - Online Professional Coaching Platform"
        // image={seoImg}
        description="Discover our professional coaching platform. From group workshops to individual coaching, we are here to give you an amazing experience."
      />
      <Navbar />
      <ExecutiveCoachingHero />
      <Executives />
      <ExecutiveCoaches />
      <What />
      <Faq />
      <Footer />
    </>
  );
};

export default ExecutiveCoaching;
