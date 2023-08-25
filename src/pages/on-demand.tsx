import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";
import "../styles/index.css";
import "../styles/colour.css";
import "../styles/fonts.css";
import Footer from "../sections/Footer/Footer";
import ImgContentTemplateRed from "../components/old/ImgContentTemplateRed/ImgContentTemplateRed";

import WhatYouGetTemplate from "../components/old/WhatYouGetTemplate/WhatYouGetTemplate";

// @ts-ignore
import selfIcon from "../assets/img/old/icons/self.svg";
// @ts-ignore
import motivatedIcon from "../assets/img/old/icons/motivated.svg";
// @ts-ignore
import coachingIcon from "../assets/img/old/icons/coaching.svg";
// @ts-ignore
import managerIcon from "../assets/img/old/icons/manager.svg";

import What from "../sections/old/What/What";
import ImgContentTemplate from "../components/old/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import onDemandImg from "../assets/img/old/onDemand.png";

import Measure from "../sections/old/Measure/Measure";
// @ts-ignore
import Seo from "../utils/seo";
import Trusted from "../sections/old/Trusted";
import InsideTemplate from "../sections/old/InsideTemplate";
import {
  AllApplication,
  Badge,
  Check,
  Code,
  Comments,
  CooperativeHandshake,
  DashboardOne,
  EveryUser,
  Eyes,
  Fist,
  Heart,
  LaptopComputer,
  Light,
  ListCheckbox,
  OvalLove,
  PersonalCollection,
  SettingConfig,
  TrendingDown,
  TwoHands,
  UserBusiness,
  UserPositioning,
  UserToUserTransmission,
} from "@icon-park/react";

// @ts-ignore
import monthlyMeetingImg from "../assets/img/old/monthlyMeeting.png";
import OnDemandTemplate from "../components/old/OnDemandTemplate/OnDemandTemplate";
import Faq from "../sections/Faq/Faq";

const OnDemandPage = () => {
  return (
    <>
      <Seo
        title="Coachello - On Demand Coaching Solution"
        description="On-demand is the best coaching support you can offer your employees. With Coachello unleash your employees full potential through personalized trainings."
      />
      <Navbar />
      <ImgContentTemplate
        img={onDemandImg}
        title="Coaching as a benefit"
        des={
          <>
            <p>
              You can only be truly performant if all of your employees thrive
              and you have created a coaching culture within your company. With
              coaching as a benefit you propose a holistic on-demand coaching
              solution that brings you just that.
            </p>
            <p>
              You are a forward-thinking organisation that understands that all
              your employees have different needs and therefore want to provide
              a solution that is fully personalised.
            </p>
            <p>
              With Coachello we provide your talents a confidential solution to
              help them thrive, no matter if they want to work on public
              speaking, stress-management, leadership or communication. We are
              there at the moment they need it most.
            </p>
            <p>
              On-demand is the best coaching support you can offer your
              employees as it is fully personalised and there at the moment they
              need it most. This fully personalised approach doesn’t mean you
              won’t get insights. Aggregated anonymised insights are available
              to show you their challenges, their progress, NPS, and eventually
              a ROI.
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
            header: "Personalised solution",
          },
          {
            icon: motivatedIcon,
            header: "High performing individuals",
          },
          {
            icon: coachingIcon,
            header: "Strong ROI",
          },
          {
            icon: managerIcon,
            header: "Retention",
          },
        ]}
      />
      <InsideTemplate
        title="Inside the program"
        list={[
          {
            icon: <Comments fill="red" />,
            header: "Communication support",
          },
          {
            icon: <LaptopComputer fill="red" />,
            header: "Onboarding webinar",
          },
          {
            icon: <AllApplication fill="red" />,
            header: "App deployment",
          },

          {
            icon: <ListCheckbox fill="red" />,
            header: "Assessment ",
          },
          {
            icon: <Code fill="red" />,
            header: "Algorithm to facilitate choice \n" + "of coach ",
          },
          {
            icon: <UserToUserTransmission fill="red" />,
            header: "1:1 coaching sessions",
          },
          {
            icon: <PersonalCollection fill="red" />,
            header: "Personalised exercises",
          },
          {
            icon: <DashboardOne fill="red" />,
            header: "HR Dashboard with aggregated anonymised data",
          },
        ]}
      />

      <Measure />
      <OnDemandTemplate
        img={monthlyMeetingImg}
        titleE={
          <>
            {" "}
            <h2>Coachello coaching as a benefit</h2>
          </>
        }
        redTitle="AS ON-DEMAND SERVICE"
        desE={
          <>
            {" "}
            <p className="">
              Allow your talents to grow and develop changes in their
              professional and personal lives. With a professional coach they
              will work on a specific short term goal during a specific time
              frame.
            </p>
          </>
        }
      />
      <What backColor="var(--warm-white)" />
      <Faq />
      <Footer />
    </>
  );
};

export default OnDemandPage;
