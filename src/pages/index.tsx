import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
// import "../styles/index.css";
import "../styles/global.css";
// import "../styles/colour.css";
// import "../styles/fonts.css";
import HowToUse from "../sections/old/HowToUse/HowToUse";
import Help from "../sections/old/Help/Help";
import Why from "../sections/Why/Why";
import OurCoaches from "../sections/OurCoaches";
import Faq from "../sections/Faq/Faq";
import Footer from "../sections/Footer/Footer";
import What from "../sections/What";
import Counter from "../components/old/Counter/Counter";
// @ts-ignore
import Seo from "../utils/seo";
import { useRef } from "react";
import BuildingBlock from "../sections/old/BuildingBlock";
import { useTypeWriter } from "../hooks/useTypeWriter";
import Hero from "../sections/Hero";
import TransformLeaders from "../sections/TransformLeaders";
import Workspace from "../sections/Workspace";
import HowItWorks from "../sections/HowItWorks";
import Outcome from "../sections/Outcome";
import Leaders from "../sections/Leaders";
// // @ts-ignore
// import seoImg from '../assets/img/SEO.jpg'

const IndexPage = () => {
  return (
    <>
      <Seo
        title="Coachello - Online Professional Coaching Platform"
        // image={seoImg}
        description="Discover our professional coaching platform. From group workshops to individual coaching, we are here to give you an amazing experience."
      />
      <Navbar />
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
      <Footer />
    </>
  );
};

export default IndexPage;
