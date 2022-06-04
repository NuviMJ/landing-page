import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/ImgContentTemplateRed/ImgContentTemplateRed";

import WhatYouGetTemplate from "../components/WhatYouGetTemplate/WhatYouGetTemplate";


// @ts-ignore
import selfIcon from '../assets/img/icons/self.svg'
// @ts-ignore
import motivatedIcon from '../assets/img/icons/motivated.svg'
// @ts-ignore
import coachingIcon from '../assets/img/icons/coaching.svg'
// @ts-ignore
import managerIcon from '../assets/img/icons/manager.svg'

import What from "../sections/What/What";
import ImgContentTemplate from "../components/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import onDemandImg from '../assets/img/onDemand.png'

import Measure from "../sections/Measure/Measure";

const OnDemandPage = () => {
    return (<>
            <Navbar/>
            <ImgContentTemplate img={onDemandImg} title="Coaching as a benefit"
                                des={
                                    <>
                                        <p>You can only be truly performant if all of your employees thrive and you have
                                            created a coaching
                                            culture within your company. With coaching as a benefit you propose a
                                            holistic
                                            on-demand
                                            coaching solution that brings you just that.
                                        </p><p>
                                        You are a forward-thinking organisation that understands that all your employees
                                        have different
                                        needs and therefore want to provide a solution that is fully personalised.
                                    </p><p>
                                        With Coachello we provide your talents a confidential solution to help them
                                        thrive,
                                        no matter if
                                        they want to work on public speaking, stress-management, leadership or
                                        communication. We are
                                        there at the moment they need it most.
                                    </p><p>
                                        On-demand is the best coaching support you can offer your employees as it is
                                        fully
                                        personalised
                                        and there at the moment they need it most. This fully personalised approach
                                        doesn’t
                                        mean you
                                        won’t get insights. Aggregated anonymised insights are available to show you
                                        their
                                        challenges,
                                        their progress, NPS, and eventually a ROI.</p>
                                    </>

                                }/>


            <WhatYouGetTemplate
                title="What you get out of it?"
                cards={[
                    {
                        icon: selfIcon,
                        header: "Personalised solution"
                    },
                    {
                        icon: motivatedIcon,
                        header: "High performing individuals"
                    },
                    {
                        icon: coachingIcon,
                        header: "Strong ROI"
                    },
                    {
                        icon: managerIcon,
                        header: "Retention"
                    }

                ]}/>
            <Measure/>


            <What backColor="var(--warm-white)"/>
            <Footer/>

        </>
    )
}

export default OnDemandPage
