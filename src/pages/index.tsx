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
// @ts-ignore
import Seo from "../utils/seo";
import {useRef} from "react";
// // @ts-ignore
// import seoImg from '../assets/img/SEO.jpg'

const IndexPage = () => {

    return (<>
            <Seo title="Coachello - Online Professional Coaching Platform"
                 // image={seoImg}
                 description="Discover our professional coaching platform. From group workshops to individual coaching, we are here to give you an amazing experience."/>
            {/*<Navbar/>*/}

            {/*<Counter trigger="" run={false} start={0} end={100} duration={10}/>*/}
            <Hero/>
            {/*<HowToUse/>*/}

            {/*<HowItWorks/>*/}
            <Help/>
            <Why/>
            <OurCoaches/>

            <What/>
            <Faq/>
            {/*<Footer/>*/}

        </>
    )
}

export default IndexPage
