import React from "react";
import Navbar from "../sections/Navbar/Navbar";
import InternalCoachingHero from "../sections/InternalCoachingHero.";
import CaseStudies from "../sections/CaseStudies";
import Faq from "../sections/Faq";
import Footer from "../sections/Footer";
// @ts-ignore
import Seo from "../utils/seo";
import ExecutiveCoachingHero from "../sections/ExecutiveCoachingHero";
import Executives from "../sections/Executives";
import ExecutiveCoaches from "../sections/ExecutiveCoaches";
import What from "../sections/What";
// @ts-ignore
import Layout from "../layouts";
const ExecutiveCoaching = () => {
  return (
    <>
      <Seo
        title="Coachello - Online Professional Coaching Platform"
        // image={seoImg}
        description="Discover our professional coaching platform. From group workshops to individual coaching, we are here to give you an amazing experience."
      />

      <Layout>
      <ExecutiveCoachingHero />
      <Executives />
      <ExecutiveCoaches />
      <What />
      <Faq />
       </Layout>
    </>
  );
};

export default ExecutiveCoaching;