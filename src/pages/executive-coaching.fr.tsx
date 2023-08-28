import React from "react";
import Navbar from "../sections/Navbar/Navbar";
import InternalCoachingHero from "../sections/InternalCoachingHero.";
import CaseStudies from "../sections/CaseStudies";
import Faq from "../sections/FaqFr";
import Footer from "../sections/Footer";
// @ts-ignore
import Seo from "../utils/seo";
import ExecutiveCoachingHero from "../sections/ExecutiveCoachingHeroFr";
import Executives from "../sections/ExecutivesFr";
import ExecutiveCoaches from "../sections/ExecutiveCoachesFr";
import What from "../sections/WhatFr";
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
