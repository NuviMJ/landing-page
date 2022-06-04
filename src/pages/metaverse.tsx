import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/ImgContentTemplateRed/ImgContentTemplateRed";

import WhatYouGetTemplate from "../components/WhatYouGetTemplate/WhatYouGetTemplate";


// @ts-ignore
import immersiveIcon from '../assets/img/icons/immersive.svg'
// @ts-ignore
import confidentialityIcon from '../assets/img/icons/confidentiality.svg'
// @ts-ignore
import safeIcon from '../assets/img/icons/safe.svg'
// @ts-ignore
import benefitsIcon from '../assets/img/icons/benefits.svg'

import What from "../sections/What/What";
import ImgContentTemplate from "../components/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import coachingBenefitImg from '../../assets/img/coachingAsBenefit.png'
import Measure from "../sections/Measure/Measure";
// @ts-ignore
import MetaverseImg from "../assets/img/Metaverse.png";

const MetaversePage = () => {
    return (<>
            <Navbar/>
            <ImgContentTemplate img={MetaverseImg} title="Metaverse"
                                des={<>
                                    <p>
                                        At Coachello we have create Coachello Labs to brings coaching in the metaverse to
                                        your employees.
                                    </p><p>
                                    And it’s not just a hype, there are plenty of benefits related to coaching in the
                                    metaverse, such as:
                                </p>
                                    <ul>
                                        <li>
                                            Offer a safe and peaceful space at work in the metaverse
                                        </li>
                                        <li>
                                            Full confidentiality through avatars
                                        </li>
                                        <li>
                                            Immersive coaching experience
                                        </li>
                                    </ul>
                                    <p>
                                        Beta tests has proven that this immersive coaching experience is extremely effective
                                        for exercises but establish confidentiality quicker between the coach & coachee.
                                    </p><p>
                                    Interested in bringing the metaverse inside your company? Talk to us today, to start
                                    tomorrow!
                                </p>
                                </>
                                }/>


            <WhatYouGetTemplate
                title="What you get out of it?"
                cards={[
                    {
                        icon: immersiveIcon,
                        header: "Immersive coaching experience"
                    },
                    {
                        icon: confidentialityIcon,
                        header: "Confidentiality "
                    },
                    {
                        icon: safeIcon,
                        header: "Safe space in the metaverse at work"
                    },
                    {
                        icon: benefitsIcon,
                        header: "Benefits of 1:1 coaching"
                    }

                ]}/>


            <What/>
            <Footer/>

        </>
    )
}

export default MetaversePage
