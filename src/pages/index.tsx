import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
import Hero from "../sections/Hero/Hero";
import HowToUse from "../sections/HowToUse/HowToUse";
import HowItWorks from "../sections/HowItWorks/HowItWorks";
import Help from "../sections/Help/Help";
import Why from "../sections/Why/Why";
import OurCoaches from "../sections/OurCoaches/OurCoaches";
import Faq from "../sections/Faq/Faq";
import Footer from "../sections/Footer/Footer";
import What from "../sections/What/What";
import SlideShow from "../components/SlideShow/SlideShow";
import ScrollSlider from "../components/ScrollSlider/ScrollSlider";
import {StepsProvider} from "react-step-builder";
import CoachingBenefit from "../sections/CoachingBenefit/CoachingBenefit";
import LeadershipCoaching from "../sections/LeadershipCoaching/LeadershipCoaching";
import GroupWorkShop from "../sections/GroupWorkShop/GroupWorkShop";
import Metaverse from "../components/Metaverse/Metaverse";
import CoachFeatures from "../sections/CoachFeatures/CoachFeatures";

// markup
const IndexPage = () => {
    return (<>
            <Navbar/>

            <Hero/>
            <HowToUse/>

            <HowItWorks/>
            <Help/>
            <Why/>
            <OurCoaches/>
            <What/>
            <Faq/>
            <Footer/>

        </>
    )
}

export default IndexPage
