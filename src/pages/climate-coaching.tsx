import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
import Footer from "../sections/Footer/Footer";

import WhatYouGetTemplate from "../components/WhatYouGetTemplate/WhatYouGetTemplate";

// @ts-ignore
import personalisedIcon from '../assets/img/icons/personalised.png'
// @ts-ignore
import measurableImpactIcon from '../assets/img/icons/measurableImpact.png'
// @ts-ignore
import empowermentIcon from '../assets/img/icons/empowerment.png'
// @ts-ignore
import consciousnessIcon from '../assets/img/icons/consciousness.png'

import What from "../sections/What/What";
import ImgContentTemplate from "../components/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import coachingBenefitImg from '../../assets/img/coachingAsBenefit.png'

// @ts-ignore
import ClimateImg from "../assets/img/Climate Coaching.png";
// @ts-ignore
import Seo from "../utils/seo";

const ClimateCoachingPage = () => {
    return (<>
            <Seo title="Coachello - Climate Coaching"
                 description=""/>
            <Navbar/>
            <ImgContentTemplate img={ClimateImg} title="Climate Coaching"
                                des={<>
                                    <p>
                                        Clarity and the ability to go forward are at the heart of coaching, and climate
                                        coaching is no different. Climate coaching may help you figure out what's
                                        stopping you and offer you the flexibility and direction you need if you're
                                        feeling stuck in this area, whether it's because you don't know what to do or
                                        because you're dealing with climate anxiety. With Coachello, we have created a
                                        climate-coaching program that helps companies in their pathway to carbon
                                        neutrality.
                                    </p>
                                    <b>Climate coaching:</b>

                                    <ul>

                                        <li>
                                            Group workshops (climate fresque, global sustainability program)
                                        </li>
                                        <li>
                                            1:1 climate coaching adapted to every individuals needs
                                        </li>

                                    </ul>
                                    <p>
                                        Coaching works because it allows everyone to gain consciousness and take action
                                        at their own level. Coachello is one solution to offer a fully personalised
                                        approach to help organisation through their sustainable transformations. Agile,
                                        data-driven and highest quality of coaching.
                                    </p><p>
                                    Our coaches are specialised in climate coaching - they are familiar with the
                                    dynamics and possess the tools to help your stakeholders reach your company’s
                                    objectives.
                                </p>
                                    <p>
                                        Collective consciousness of the urgency of climate change is the biggest
                                        solution to arrive at carbon neutrality.
                                    </p>
                                </>
                                }/>


            <WhatYouGetTemplate
                title="What you get out of it?"
                cards={[
                    {
                        icon: consciousnessIcon,
                        header: "Consciousness"
                    },
                    {
                        icon: measurableImpactIcon,
                        header: "Measurable Impact "
                    },
                    {
                        icon: empowermentIcon,
                        header: "Empowerment"
                    },
                    {
                        icon: personalisedIcon,
                        header: "Personalised Approach"
                    }

                ]}/>
            <What/>
            <Footer/>
        </>
    )
}

export default ClimateCoachingPage