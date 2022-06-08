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
import Counter from "../components/Counter/Counter";
import {useRef} from "react";

const IndexPage = () => {

    return (<>
            <Navbar/>

            {/*<Counter trigger="" run={false} start={0} end={100} duration={10}/>*/}
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
