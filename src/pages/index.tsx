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
