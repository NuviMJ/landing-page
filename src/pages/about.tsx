import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
// @ts-ignore
import CongueImg from '../assets/img/team.png'
// @ts-ignore
import philosopyImg from '../assets/img/philosophy.png'
import '../sections/YouAreCoach/YouAreCoach.scss'
import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/ImgContentTemplateRed/ImgContentTemplateRed";
import CoreTeam from "../sections/CoreTeam/CoreTeam";
// @ts-ignore
import Seo from "../utils/seo";

const AboutPage = () => {
    return (<>
            <Seo title="Coachello - About Us"/>
            <Navbar/>
            <ImgContentTemplateRed img={CongueImg}
                                   redTitle="Coachello" titleE={<h1>About Coachello</h1>} desE={
                <>
                    <b>Coachello is a solution that puts your talents in contact with high quality coaches at moments
                        they need them most during their employee experience.</b>
                    <p>Founded by Quentin, Leon, Livia and Dinal - in the midst of the pandemic - to democratise
                        coaching and to remove the barriers that prevented this from happening (for companies: $$$$,
                        time-consuming, non-scalable, lack of transparency on results).

                        <p>Companies would often offer coaching to executives only and rely upon their own network of
                            (befriended) coaches. The tripartite agreement they put in place before starting external
                            coaching makes the process lengthy and expensive. In addition they don’t have tools to scale
                            external coaching and measure the performance of their coaches.</p>
                    </p>
                </>
            }/>
            <CoreTeam/>
            <ImgContentTemplateRed img={philosopyImg}
                                   redTitle="Philosophy"
                                   titleE={<h2>Coachello brings world-class personalised support to the Workplace
                                   </h2>}
                                   desE={
                                       <>
                                           <p>Coachello is selected by Slack for its Future of Work program and actively works with Microsoft to make the work place personalised. </p>
                                           <button className="YouAreCoach-button">Learn in 20 Minutes What We Can Do For You</button>
                                       </>
                                    
                                   }/>
                                   
            <Footer/>
        </>
    )
}

export default AboutPage
