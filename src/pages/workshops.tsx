import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/ImgContentTemplateRed/ImgContentTemplateRed";

import WhatYouGetTemplate from "../components/WhatYouGetTemplate/WhatYouGetTemplate";


// @ts-ignore
import skillsIcon from '../assets/img/icons/skills.svg'
// @ts-ignore
import cohesionIcon from '../assets/img/icons/cohesion.svg'
// @ts-ignore
import performanceIcon from '../assets/img/icons/performance.svg'
// @ts-ignore
import clarityIcon from '../assets/img/icons/clarity.svg'

import What from "../sections/What/What";
import ImgContentTemplate from "../components/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import coachingBenefitImg from '../../assets/img/coachingAsBenefit.png'
import Measure from "../sections/Measure/Measure";
// @ts-ignore
import GroupWorkShopImg from "../assets/img/GroupWorkshop.png";
// @ts-ignore
import Seo from "../utils/seo";
const WorkshopsPage = () => {
    return (<>
            <Seo title="Coachello - Group Coaching Workshops"
                 description="Help your employees to improve their skills and improve the communication in your teams thanks to our group coaching workshop."/>
            <Navbar/>
            <ImgContentTemplate img={GroupWorkShopImg} title="Group workshops"
                                des={<>
                                    <p>
                                        It’s great to offer fully personalised solutions, but real success you will
                                        obtain
                                        when each individual will work together as a team. Group workshops are popular
                                        for
                                        that reason.
                                    </p><p>
                                    Sometimes it is cohesion that’s missing, other times leadership skills, or quite
                                    common
                                    an issue - everyone is aware of - but left unspoken.
                                </p><p>
                                    After an audit on what issue is most important to your organisation we will provide
                                    you
                                    with the right workshops: group training, group coaching or a mix between individual
                                    and
                                    group coaching.
                                </p><p>
                                    Group trainings are possible on topics as: management, communication, leadership,
                                    public
                                    speaking, and others, and may very well be offered in combination with individual
                                    coaching.
                                </p>
                                </>
                                }/>


            <WhatYouGetTemplate
                title="What you get out of it?"
                cards={[
                    {
                        icon: skillsIcon,
                        header: "Skills"
                    },
                    {
                        icon: cohesionIcon,
                        header: "Cohesion"
                    },
                    {
                        icon: performanceIcon,
                        header: "Team Performance"
                    },
                    {
                        icon: clarityIcon,
                        header: "Clarity"
                    }

                ]}/>


            <What/>
            <Footer/>

        </>
    )
}

export default WorkshopsPage
