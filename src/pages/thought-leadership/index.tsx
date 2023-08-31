import * as React from "react";
import Navbar from "../../sections/Navbar/Navbar";
import "../../styles/index.css";
import "../../styles/colour.css";
import "../../styles/fonts.css";
import Footer from "../../sections/Footer";

// @ts-ignore
import leadershipCoachingImg from "../../assets/img/old/leadershipCoaching.png";
// @ts-ignore
import macImg from "../../assets/img/old/MacBook Air.png";
// @ts-ignore
import selfIcon from "../../assets/img/old/icons/self.svg";
// @ts-ignore
import motivatedIcon from "../../assets/img/old/icons/motivated.svg";
// @ts-ignore
import coachingIcon from "../../assets/img/old/icons/coaching.svg";
// @ts-ignore
import managerIcon from "../../assets/img/old/icons/manager.svg";

import ThoughtLeadership from "../../sections/ThoughtLeadership/ThoughtLeadership";
// @ts-ignore
import Seo from "../../utils/seo";
import { graphql } from "gatsby";

interface ThoughtLeadershipPage {
  data: any;
}

const ThoughtLeadershipPage: React.FC<ThoughtLeadershipPage> = ({ data }) => {
  return (
    <>
      <Seo title="Coachello - Thought Leadership" />
      <Navbar />
      <ThoughtLeadership data={data?.allPrismicBlogPage?.nodes || []} />
      <Footer />
    </>
  );
};

export default ThoughtLeadershipPage;

export const query = graphql`
  query BlogPage {
    allPrismicBlogPage(sort: { order: DESC, fields: last_publication_date }) {
      nodes {
        id
        data {
          date_of_publication
          subject {
            text
          }
          title {
            text
          }
          image {
            url(imgixParams: { width: 800, q: 100 })
            alt
          }
        }
        uid
        last_publication_date
      }
    }
  }
`;
