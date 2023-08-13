import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
import "../styles/index.css";
import "../styles/colour.css";
import "../styles/fonts.css";
import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/old/ImgContentTemplateRed/ImgContentTemplateRed";

import WhatYouGetTemplate from "../components/old/WhatYouGetTemplate/WhatYouGetTemplate";

// @ts-ignore
import skillsIcon from "../assets/img/old/icons/skills.svg";
// @ts-ignore
import cohesionIcon from "../assets/img/old/icons/cohesion.svg";
// @ts-ignore
import performanceIcon from "../assets/img/old/icons/performance.svg";
// @ts-ignore
import clarityIcon from "../assets/img/old/icons/clarity.svg";

import What from "../sections/old/What/What";
import ImgContentTemplate from "../components/old/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import coachingBenefitImg from "../../assets/img/coachingAsBenefit.png";
import Measure from "../sections/old/Measure/Measure";
// @ts-ignore
import GroupWorkShopImg from "../assets/img/old/GroupWorkshop.png";
// @ts-ignore
import Seo from "../utils/seo";
import { EveryUser, SettingConfig, UserPositioning } from "@icon-park/react";
import InsideTemplate from "../sections/old/InsideTemplate";
import BuildingBlock from "../sections/old/BuildingBlock";
import Faq from "../sections/old/Faq/Faq";

const WorkshopsPage = () => {
  return (
    <>
      <Seo
        title="Coachello - Group Coaching Workshops"
        description="Help your employees to improve their skills and improve the communication in your teams thanks to our group coaching workshop."
      />
      <Navbar />
      <ImgContentTemplate
        img={GroupWorkShopImg}
        title="Group workshops"
        des={
          <>
            <p>
              It’s great to offer fully personalised solutions, but real success
              you will obtain when each individual will work together as a team.
              Group workshops are popular for that reason.
            </p>
            <p>
              Sometimes it is cohesion that’s missing, other times leadership
              skills, or quite common an issue - everyone is aware of - but left
              unspoken.
            </p>
            <p>
              After an audit on what issue is most important to your
              organisation we will provide you with the right workshops: group
              training, group coaching or a mix between individual and group
              coaching.
            </p>
            <p>
              Group trainings are possible on topics as: management,
              communication, leadership, public speaking, and others, and may
              very well be offered in combination with individual coaching.
            </p>
          </>
        }
      />

      <WhatYouGetTemplate
        title="What you get out of it?"
        cards={[
          {
            icon: skillsIcon,
            header: "Skills",
          },
          {
            icon: cohesionIcon,
            header: "Cohesion",
          },
          {
            icon: performanceIcon,
            header: "Team Performance",
          },
          {
            icon: clarityIcon,
            header: "Clarity",
          },
        ]}
      />

      <InsideTemplate
        title="Inside the program"
        list={[
          {
            icon: <EveryUser fill="red" />,
            header: "Group coaching, co-development or training",
          },
          {
            icon: <SettingConfig fill="red" />,
            header: "Custom made and adapted to your audience and objectifs",
          },
          {
            icon: <UserPositioning fill="red" />,
            header: "In person or through webinar",
          },
        ]}
      />
      <BuildingBlock />
      <What />
      <Faq />
      <Footer />
    </>
  );
};

export default WorkshopsPage;
