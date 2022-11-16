import * as React from "react";
import Navbar from "../../sections/Navbar/Navbar";
import "../../styles/index.css";
import "../../styles/colour.css";
import "../../styles/fonts.css";
import Footer from "../../sections/Footer/Footer";

// @ts-ignore
import leadershipCoachingImg from "../../assets/img/leadershipCoaching.png";
// @ts-ignore
import macImg from "../../assets/img/MacBook Air.png";
// @ts-ignore
import selfIcon from "../../assets/img/icons/self.svg";
// @ts-ignore
import motivatedIcon from "../../assets/img/icons/motivated.svg";
// @ts-ignore
import coachingIcon from "../../assets/img/icons/coaching.svg";
// @ts-ignore
import managerIcon from "../../assets/img/icons/manager.svg";

import ThoughtLeadership from "../../sections/ThoughtLeadership/ThoughtLeadership";
import { PrismicProvider } from "@prismicio/react";
import { client } from "../../utils/prismic";
// @ts-ignore
import Seo from "../../utils/seo";

const ThoughtLeadershipPage = () => {
  return (
    <>
      <Seo title="Coachello - Thought Leadership" />
      <Navbar />
      <PrismicProvider client={client}>
        <ThoughtLeadership />
      </PrismicProvider>
      <Footer />
    </>
  );
};

export default ThoughtLeadershipPage;
