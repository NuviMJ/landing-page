import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
// @ts-ignore
import caseStudiesImg from '../assets/img/caseStudies.svg'
// @ts-ignore
import philosopyImg from '../assets/img/philosophy.svg'

import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/ImgContentTemplateRed/ImgContentTemplateRed";
import CoreTeam from "../sections/CoreTeam/CoreTeam";
import What from "../sections/What/What";
import CaseVideos from "../sections/CaseVideos/CaseVideos";
import WhatYouGetTemplate from "../components/WhatYouGetTemplate/WhatYouGetTemplate";


// @ts-ignore
import certifiedIcon from "../assets/img/features/certified.svg";

const CaseStudiesPage = () => {
    return (<>
            <Navbar/>


            <ImgContentTemplateRed img={caseStudiesImg}
                                   redTitle="Case studies"
                                   titleE={<h1>Don’t take our word for it, take the word from our clients and their
                                       talents.</h1>}
            />

            <CaseVideos/>
            <What/>

            <Footer/>

        </>
    )
}

export default CaseStudiesPage