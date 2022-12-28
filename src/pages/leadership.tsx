import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
import "../styles/index.css";
import "../styles/colour.css";
import "../styles/fonts.css";
import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/ImgContentTemplateRed/ImgContentTemplateRed";

import WhatYouGetTemplate from "../components/WhatYouGetTemplate/WhatYouGetTemplate";

// @ts-ignore
import leadershipCoachingImg from "../assets/img/leadershipCoaching.png";
// @ts-ignore
import macImg from "../assets/img/MacBook Air.png";
// @ts-ignore
import selfIcon from "../assets/img/icons/self.svg";
// @ts-ignore
import motivatedIcon from "../assets/img/icons/motivated.svg";
// @ts-ignore
import coachingIcon from "../assets/img/icons/coaching.svg";
// @ts-ignore
import managerIcon from "../assets/img/icons/manager.svg";
import What from "../sections/What/What";
import ImgContentTemplate from "../components/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import Seo from "../utils/seo";
import Trusted from "../sections/Trusted";
import InsideTemplate from "../sections/InsideTemplate";
import {
  Check,
  CooperativeHandshake,
  Eyes,
  Fist,
  Heart,
  Light,
  OvalLove,
  TrendingDown,
  TwoHands,
  UserBusiness,
} from "@icon-park/react";
import OnDemandTemplate from "../components/OnDemandTemplate/OnDemandTemplate";
// @ts-ignore
import monthlyMeetingImg from "../assets/img/monthlyMeeting1.png";
import Faq from "../sections/Faq/Faq";

const LeadershipPage = () => {
  return (
    <>
      <Seo
        title="Leadership Coaching - Transform Your Managers Into Leaders"
        description="Integrate coaching as a core element of your talent & development strategy. Thanks to our professional coaching platform boost your employees skills."
      />
      <Navbar />
      <ImgContentTemplate
        img={leadershipCoachingImg}
        title="Leadership Coaching "
        des={
          <>
            <p>
              Integrate coaching as a core element of your talent & development
              strategy.
            </p>
            <p>
              Transform your managers into leaders and support them with the
              most personalised and impactful performance tool.
            </p>
            <p>
              Leadership coaching differs from holistic coaching as it starts
              with a fixed programme for all selected leaders that work towards
              their own personalised goals.
            </p>
            <p>
              Leadership coaching is an amazing tool to build a coaching culture
              in an organisation as the coaching techniques the leaders will
              learn during their sessions, they will apply within their team.
            </p>
            <p>
              Per consequence there is a cascading effect of coaching skills
              from coach to your leaders, and from your leaders to their team.
              This will result in a coaching culture.{" "}
            </p>
          </>
        }
      />
      <Trusted />
      <WhatYouGetTemplate
        title="What you get out of it?"
        cards={[
          {
            icon: selfIcon,
            header: "Self-conscious leaders",
          },
          {
            icon: motivatedIcon,
            header: "Motivated leaders",
          },
          {
            icon: coachingIcon,
            header: "Coaching culture",
          },
          {
            icon: managerIcon,
            header: "Coach manager posture",
          },
        ]}
      />
      <InsideTemplate
        title="Leadership behaviours"
        list={[
          {
            icon: <Heart fill="red" />,
            header: "Openess",
          },
          {
            icon: <Light fill="red" />,
            header: "Innovative",
          },
          {
            icon: <Eyes fill="red" />,
            header: "Vision",
          },

          {
            icon: <CooperativeHandshake fill="red" />,
            header: "Commitment",
          },
          {
            icon: <Fist fill="red" />,
            header: "Empowerment",
          },
          {
            icon: <TrendingDown fill="red" />,
            header: "Performance",
          },
          {
            icon: <Check fill="red" />,
            header: " Authenticity",
          },
          {
            icon: <UserBusiness fill="red" />,
            header: "Collaboration",
          },
          {
            icon: <OvalLove fill="red" />,
            header: "Empathy",
          },
          {
            icon: <TwoHands fill="red" />,
            header: "Altruism",
          },
        ]}
      />
      <OnDemandTemplate
        img={monthlyMeetingImg}
        titleE={
          <>
            {" "}
            <h2>Coachello Leadership Program</h2>
          </>
        }
        redTitle=""
        desE={
          <>
            {" "}
            <p className="">
              During 4 to 6 months your leaders will develop a strong
              understanding of their strengths and growth opportunities. They
              obtain measurable improvements that come from working with a
              professional coach. Personalised exercises between sessions show
              swift improvements in their leadership behaviours. Anonymised
              aggregated data show strong ROIs.
            </p>
          </>
        }
      />
      <div className="bg-white px-24 py-16 flex gap-5 items-center justify-between">
        <div className="">
          <h2>Yes! I think I want this!</h2>
        </div>
        <div className="">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://meetings.hubspot.com/leon-wever/coffee-with-coachello"
          >
            <button className="Navbar-button"> Book a call with us</button>
          </a>
        </div>
      </div>
      <What />
      <Faq />
      <Footer />
    </>
  );
};

export default LeadershipPage;
