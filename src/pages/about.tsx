import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
// @ts-ignore
import CongueImg from '../assets/img/about.jpeg'
// @ts-ignore
import philosopyImg from '../assets/img/philosophy.png'

import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/ImgContentTemplateRed/ImgContentTemplateRed";
import CoreTeam from "../sections/CoreTeam/CoreTeam";


const AboutPage = () => {
    return (<>
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
                                   titleE={<h2>Offering the highest of quality of coaching in the most efficient way
                                       possible so you get the best price, quality, and UX equation.
                                   </h2>}
                                   desE={
                                       <>
                                           <p>We are driven by human connections but propelled by technical innovation
                                               and are highly data driven. </p>
                                       </>
                                   }/>
            <Footer/>
        </>
    )
}

export default AboutPage
