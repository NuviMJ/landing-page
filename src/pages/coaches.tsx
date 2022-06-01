import * as React from "react"
import Navbar from "../sections/Navbar/Navbar";
import '../styles/index.css';
import '../styles/colour.css';
import '../styles/fonts.css';
// @ts-ignore
import LiviaImg from '../assets/img/ourCoaches/livia.svg'

import Footer from "../sections/Footer/Footer";

import CoachFeatures from "../sections/CoachFeatures/CoachFeatures";
import CoachProfile from "../components/CoachProfile/CoachProfile";

import MeetCoaches from "../sections/MeetCoaches/MeetCoaches";
import YouAreCoach from "../sections/YouAreCoach/YouAreCoach";
import GlobalExcellence from "../sections/GlobalExcellence/GlobalExcellence";

// markup
const CoachesPage = () => {
    return (<>
            <Navbar/>
            <GlobalExcellence/>
            <CoachFeatures/>
            <CoachProfile img={LiviaImg} redTitle="HEY!"
                          title="Meet Livia, our Head of Coaching"
                          desE={
                              <><p>ICF PCC qualified coach, former top tier lawyer (Paris & NY Bar), trainer and theatre
                                  actress. Is there anything she cannot do? Not that we can think of.
                              </p> <p>
                                  Knowledgeable, approachable and always in a good mood to advice our clients on their
                                  (individual) coaching programs. Furthermore, she animes our pool of coaches and helps
                                  onboard our clients.
                              </p><p>
                                  Want to book a meeting with me? Please send me an email at <a
                                  style={{color: "var(--red)"}}>livia@coachello.io</a>
                              </p>
                              </>}
            />
            <MeetCoaches/>
            <YouAreCoach/>
            <Footer/>

        </>
    )
}

export default CoachesPage
