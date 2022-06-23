import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/ImgContentTemplateRed/ImgContentTemplateRed";

import WhatYouGetTemplate from "../components/WhatYouGetTemplate/WhatYouGetTemplate";

// @ts-ignore
import leadershipCoachingImg from '../assets/img/leadershipCoaching.png'
// @ts-ignore
import macImg from '../assets/img/MacBook Air.png'
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
import Seo from "../utils/seo";
const LeadershipPage = () => {
    return (<>
            <Seo title="Leadership Coaching - Transform Your Managers Into Leaders"
                 description="Integrate coaching as a core element of your talent & development strategy. Thanks to our professional coaching platform boost your employees skills."/>
            <Navbar/>
            <ImgContentTemplate img={leadershipCoachingImg}
                                title="Leadership Coaching "
                                des={<>
                                    <p>
                                        Integrate coaching as a core element of your talent & development strategy.
                                    </p>
                                    <p>
                                        Transform your managers into leaders and support them with the most personalised
                                        and
                                        impactful performance tool.
                                    </p><p>
                                    Leadership coaching differs from holistic coaching as it starts with a fixed
                                    programme for all selected leaders that work towards their own personalised goals.
                                </p><p>
                                    Leadership coaching is an amazing tool to build a coaching culture in an
                                    organisation as the coaching techniques the leaders will learn during their
                                    sessions, they will apply within their team.
                                </p>
                                    <p>
                                        Per consequence there is a cascading effect of coaching skills from coach to
                                        your leaders, and from your leaders to their team. This will result in a
                                        coaching culture. </p>
                                </>
                                }/>

            <WhatYouGetTemplate
                title="What you get out of it?"
                cards={[
                    {
                        icon: selfIcon,
                        header: "Self-conscious leaders"
                    },
                    {
                        icon: motivatedIcon,
                        header: "Motivated leaders"
                    },
                    {
                        icon: coachingIcon,
                        header: "Coaching culture"
                    },
                    {
                        icon: managerIcon,
                        header: "Coach manager posture"
                    }

                ]}/>


            <What/>
            <Footer/>

        </>
    )
}

export default LeadershipPage
