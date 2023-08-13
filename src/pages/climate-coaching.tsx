import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
import "../styles/index.css";
import "../styles/colour.css";
import "../styles/fonts.css";
import Footer from "../sections/Footer/Footer";

import WhatYouGetTemplate from "../components/old/WhatYouGetTemplate/WhatYouGetTemplate";

// @ts-ignore
import personalisedIcon from "../assets/img/old/icons/personalised.png";
// @ts-ignore
import measurableImpactIcon from "../assets/img/old/icons/measurableImpact.png";
// @ts-ignore
import empowermentIcon from "../assets/img/old/icons/empowerment.png";
// @ts-ignore
import consciousnessIcon from "../assets/img/old/icons/consciousness.png";

import What from "../sections/old/What/What";
import ImgContentTemplate from "../components/old/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import coachingBenefitImg from "../../assets/img/coachingAsBenefit.png";

// @ts-ignore
import ClimateImg from "../assets/img/old/Climate Coaching.png";
// @ts-ignore
import Seo from "../utils/seo";
import OnDemandTemplate from "../components/old/OnDemandTemplate/OnDemandTemplate";
// @ts-ignore
import monthlyMeetingImg from "../assets/img/old/monthlyMeeting2.png";

const ClimateCoachingPage = () => {
  return (
    <>
      <Seo
        title="Coachello - Climate Coaching"
        description="Reach carbon neutrality through group workshops and 1:1 climate coaching"
      />
      <Navbar />
      <ImgContentTemplate
        img={ClimateImg}
        title="Climate Coaching"
        des={
          <>
            <p>
              Clarity and the ability to go forward are at the heart of
              coaching, and climate coaching is no different. Climate coaching
              may help you figure out what's stopping you and offer you the
              flexibility and direction you need if you're feeling stuck in this
              area, whether it's because you don't know what to do or because
              you're dealing with climate anxiety.
            </p>
            <p>
              With Coachello, we have created a climate-coaching program that
              helps companies in their pathway to carbon neutrality through:
            </p>

            <ul>
              <li>
                Group workshops (climate fresque, global sustainability program)
              </li>
              <li>1:1 climate coaching adapted to every individuals needs</li>
            </ul>
            <p>
              Coaching works because it allows everyone to gain consciousness
              and take action at their own level. Coachello is one solution to
              offer a fully personalised approach to help organisation through
              their sustainable transformations. Agile, data-driven and highest
              quality of coaching.
            </p>
            <p>
              Our coaches are specialised in climate coaching - they are
              familiar with the dynamics dynamics in this field and possess the
              tools to help your stakeholders reach your company’s objectives.
            </p>
            <p>
              Do you want to a personalised solution to actively and measurably
              bring down your organisation’s footprint? Do you want to empower
              your talents to take action? Do you want them to be more
              resourceful?
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://meetings.hubspot.com/leon-wever/coffee-with-coachello"
            >
              <button className="Navbar-button"> Don’t wait: Talk to us</button>
            </a>
          </>
        }
      />

      <WhatYouGetTemplate
        title="What you get out of it?"
        cards={[
          {
            icon: consciousnessIcon,
            header: "Consciousness",
          },
          {
            icon: measurableImpactIcon,
            header: "Measurable Impact ",
          },
          {
            icon: empowermentIcon,
            header: "Empowerment",
          },
          {
            icon: personalisedIcon,
            header: "Personalised Approach",
          },
        ]}
      />
      <OnDemandTemplate
        img={monthlyMeetingImg}
        titleE={
          <>
            {" "}
            <h2>Climate Coaching</h2>
          </>
        }
        redTitle="AS ON-DEMAND SERVICE"
        desE={
          <>
            {" "}
            <p className="">
              Break-down the barriers of in-action and make your talents active
              stakeholders within your organisation. Allow them to be more
              influencable and help reach your organisations objectives.
            </p>
          </>
        }
      />
      <What />
      <Footer />
    </>
  );
};

export default ClimateCoachingPage;
