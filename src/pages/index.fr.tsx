import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
// import "../styles/index.css";
import "../styles/global.css";
// import "../styles/colour.css";
// import "../styles/fonts.css";
import HowToUse from "../sections/old/HowToUse/HowToUse";
import Help from "../sections/old/Help/Help";
import Why from "../sections/Why/WhyFr";
import OurCoaches from "../sections/OurCoachesFr";
import Faq from "../sections/FaqFr";
import Footer from "../sections/Footer";
import What from "../sections/WhatFr";
import Counter from "../components/old/Counter/Counter";
// @ts-ignore
import Seo from "../utils/seo";
import { useRef } from "react";
import BuildingBlock from "../sections/old/BuildingBlock";
import { useTypeWriter } from "../hooks/useTypeWriter";
import Hero from "../sections/HeroFr";
import TransformLeaders from "../sections/TransformLeadersFr";
import Workspace from "../sections/WorkspaceFr";
import HowItWorks from "../sections/HowItWorksFr";
import Outcome from "../sections/OutcomeFr";
import Leaders from "../sections/LeadersFr";
// // @ts-ignore
// import seoImg from '../assets/img/SEO.jpg'
// @ts-ignore
import Layout from "../layouts";
const IndexPage = () => {
  return (
    <>
      <Seo
        title="Coachello - Online Professional Coaching Platform"
        // image={seoImg}
        description="Discover our professional coaching platform. From group workshops to individual coaching, we are here to give you an amazing experience."
      />
      <Layout>
      {/*<Counter trigger="" run={false} start={0} end={100} duration={10}/>*/}
      <Hero />
      <TransformLeaders />
      <Workspace />
      <HowItWorks />
      <Outcome />
      {/*<Help />*/}
      {/*<HowToUse />*/}
      <Why />
      <OurCoaches />

      <Leaders />

      <What />
      {/*<BuildingBlock />*/}
      <Faq />
      </Layout>
    </>
  );
};

export default IndexPage;
