import React from 'react';
import Navbar from "../sections/Navbar/Navbar";
import ImgContentTemplate from "../components/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import MeilleursImg from "../assets/img/meilleursHero.png";
// @ts-ignore
import MeilleursStudyImg from "../assets/img/meilleursStudy.png";
// @ts-ignore
import MeilleursLogo from "../assets/img/meilleursLogo.png";
// @ts-ignore
import locationIcon from "../assets/img/icons/majesticons_map-marker-line.png";

// @ts-ignore
import userIcon from "../assets/img/icons/majesticons_users-line.png";

// @ts-ignore
import buildingIcon from "../assets/img/icons/icon-park-outline_factory-building.png";

// @ts-ignore
import l1Icon from "../assets/img/icons/icon-park-outline_flag.png";

// @ts-ignore
import l2Icon from "../assets/img/icons/icon-park-outline_target-two.png";

// @ts-ignore
import l3Icon from "../assets/img/icons/majesticons_scan-user-line.png";

// @ts-ignore
import l4Icon from "../assets/img/icons/icon-park-outline_double-up.png";

// @ts-ignore
import Seo from "../utils/seo";
import CompanyIconCard from "../components/CompanyIconCard/CompanyIconCard";
import Objectives from "../sections/Objectives/Objectives";
import CompanyCaseStudyTemplate from "../components/CompanyCaseStudyTemplate/CompanyCaseStudyTemplate";
import What from "../sections/What/What";
import {Link} from "gatsby";
import Footer from "../sections/Footer/Footer";

const MeilleursAgents = () => {
    return (
        <>
            <Seo title="Coachello - Case Studies"/>
            <Navbar/>
            <ImgContentTemplate img={MeilleursImg} title="Meilleurs Agents"
                                des={<>
                                    <p>
                                        MeilleursAgents.com is an innovative real estate service for individuals selling
                                        property. Founded in 2008, MeilleursAgents.com started with only four employees,
                                        the founders. Today, the company has over three hundred employees, more than
                                        10,000 partner agencies and has become the leader in online real estate pricing
                                        and estimation with an 81% national audience share.
                                    </p>
                                    <div className="flex justify-between py-4">
                                        <CompanyIconCard icon={locationIcon} header={'Paris, France'} des={'Location'}/>
                                        <CompanyIconCard icon={userIcon} header={'300+'} des={'Company Size'}/>
                                        <CompanyIconCard icon={buildingIcon} header={'Real Estate'} des={'Industry'}/>
                                    </div>

                                    <p>
                                        Paris-based, high-growth, a recent acquisition by a major international group
                                        and by itself already a market leader. We are not disclosing all details but it
                                        is safe to say that there were more than enough ingredients to put a meaningful
                                        leadership coaching program into place for their managerial population. That’s
                                        exactly what we did and what made us love Meilleurs Agents.
                                    </p>
                                </>
                                }/>
            <Objectives>
                <div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li className="flex gap-2 items-center m-0">
                            <img width={32} height={32} src={l1Icon}/>
                            <h4 className={"m-0"}>Increase managerial & leadership skills</h4>
                        </li>
                        <li className="flex gap-2 items-center m-0">
                            <img width={32} height={32} src={l2Icon}/>
                            <h4>Support all managers on a personalized manner </h4>
                        </li>
                        <li className="flex gap-2 items-center m-0">
                            <img width={32} height={32} src={l3Icon}/>
                            <h4> Drive behavioral change </h4>
                        </li>
                        <li className="flex gap-2 items-center m-0">
                            <img width={32} height={32} src={l4Icon}/>
                            <h4> Integrate coaching in broader L&D program</h4>
                        </li>

                    </ul>


                </div>
            </Objectives>
            <CompanyCaseStudyTemplate img={MeilleursStudyImg} logo={MeilleursLogo}
                                      header="How Meilleurs Agents implemented Coachello Leadership Coaching Program to support and upskill their managers"
                                      rightContentE={
                                          <>

                                              <p style={{letterSpacing:"0.28em"}} className="text-[#FD0054] text-[18px] uppercase">
                                                  Solution
                                              </p>
                                              <p>
                                                  Given the context, Meilleurs Agents realized it was going to be
                                                  crucial to invest in their managers, to increase engagement, to
                                                  support them to become better leaders, to address their challenges and
                                                  to help them navigate in a period of change.

                                              </p>
                                              <p>That’s why Aminata Pelletier and Clarisse Berriau, Meilleurs Agents's
                                                  HR Managers, wanted to create a learning path that included coaching
                                                  and make them autonomous of their personal development. Coaching was
                                                  only available to C-Levels, and they wanted to scale it to more
                                                  managers with a coaching solution.</p>

<br/>
                                              <p style={{letterSpacing:"0.28em"}} className="text-[#FD0054] text-[18px] uppercase">
                                                  Features
                                              </p>
                                              <p>
                                                  Coachello Leadership has been made available to 40 managers at
                                                  Meilleurs Agents in France.
                                              </p>

                                              <p>
                                                  Features:
                                              </p>
                                              <ul className="leading-6">
                                                  <li>
                                                      Access to the Slack Application for all employees

                                                  </li>
                                                  <li>
                                                      Leadership Coaching Program (6 sessions each)

                                                  </li>
                                                  <li>
                                                      Three-party agreement with M+1 to set the framework during first
                                                      session

                                                  </li>
                                                  <li>
                                                      Data insights on performance over set-objectives


                                                  </li>
                                                  <li>
                                                      Orientation call with the Head of Coaching

                                                  </li>
                                              </ul>

                                              <br/>

                                              <p style={{letterSpacing:"0.28em"}} className="text-[#FD0054] text-[18px] uppercase">
                                                  Results
                                              </p>
                                              <p>
                                                  Since the launch of the Leadership Coaching Program, participants have
                                                  shown amazing progress. After only three months the program got
                                                  expanded to other managers inside the company. The top 5 coaching
                                                  topics were : leadership, management, communication, relationships,
                                                  and meaning at work.
                                              </p>
                                              <p>The implementation of this program has led to the following
                                                  outcomes:</p>
                                              <ul className="leading-6">
                                                  <li>
                                                      96% of managers are satisfied with Coachello and recommend
                                                      coaching to other managers.

                                                  </li>
                                                  <li>
                                                      95% of managers declared that Coachello has improved their
                                                      Leadership skills.

                                                  </li>
                                                  <li>
                                                      87% of managers reported that Coachello helped them be more
                                                      engaged with the company

                                                  </li>
                                                  <li>
                                                      77% of collaborators felt that Coachello had a positive impact on
                                                      their communication and relationship with others.

                                                  </li>
                                              </ul>

                                              <br/>
                                              <Link  target="_blank" to={'https://meetings.hubspot.com/quentin-bouche/intro-coachello'}>

                                              <button className="Navbar-button">Learn in 20 Minutes What We Can Do For
                                                  You
                                              </button>
                                              </Link>
                                          </>
                                      }/>
            <What/>
            <Footer/>

        </>
    );
};

export default MeilleursAgents;
