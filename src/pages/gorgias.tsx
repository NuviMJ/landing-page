import React from "react";
import Navbar from "../sections/Navbar/Navbar";
import ImgContentTemplate from "../components/old/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import GorgiasImg from "../assets/img/old/gorgias.png";
// @ts-ignore
import GorgiasStudyImg from "../assets/img/old/gorgiasStudy.png";
// @ts-ignore
import GorgiasLogo from "../assets/img/old/gorgiasLogo.png";
// @ts-ignore
import locationIcon from "../assets/img/old/icons/majesticons_map-marker-line.png";

// @ts-ignore
import userIcon from "../assets/img/old/icons/majesticons_users-line.png";

// @ts-ignore
import buildingIcon from "../assets/img/old/icons/icon-park-outline_factory-building.png";

// @ts-ignore
import l1Icon from "../assets/img/old/icons/icon-park-outline_setting.png";

// @ts-ignore
import l2Icon from "../assets/img/old/icons/icon-park-outline_setting-three.png";

// @ts-ignore
import l3Icon from "../assets/img/old/icons/icon-park-outline_tree-one.png";

// @ts-ignore
import l4Icon from "../assets/img/old/icons/icon-park-outline_oval-love-two.png";

// @ts-ignore
import l5Icon from "../assets/img/old/icons/icon-park-outline_user.png";

// @ts-ignore
import l6Icon from "../assets/img/old/icons/icon-park-outline_brain.png";

// @ts-ignore
import Seo from "../utils/seo";
import CompanyIconCard from "../components/old/CompanyIconCard/CompanyIconCard";
import Objectives from "../sections/old/Objectives/Objectives";
import CompanyCaseStudyTemplate from "../components/old/CompanyCaseStudyTemplate/CompanyCaseStudyTemplate";
import What from "../sections/old/What/What";
import ProfileVideoCard from "../components/old/ProfileVideoCard/ProfileVideoCard";
// @ts-ignore
import adelineThumb from "../assets/img/old/thumbnails/adeline.png";
// @ts-ignore
import playIcon from "../assets/img/old/icons/playButton.svg";
import ReactPlayer from "react-player";
import { Link } from "gatsby";
import Footer from "../sections/Footer";

const Gorgias = () => {
  return (
    <>
      <Seo title="Coachello - Case Studies" />
      <Navbar />
      <ImgContentTemplate
        img={GorgiasImg}
        title="Gorgias"
        des={
          <>
            <p>
              Gorgias provides a global multichannel help desk to e-commerce
              merchants. It allows merchants to manage all their support from
              one place. They have been scaling fast for the past years and have
              grown into a 300+ person organization helping over 10 000 +
              customers!
            </p>
            <div className="flex justify-between py-4">
              <CompanyIconCard
                icon={locationIcon}
                header={"San Francisco, California"}
                des={"Location"}
              />
              <CompanyIconCard
                icon={userIcon}
                header={"300+ \n" + "(Full Remote)"}
                des={"Company Size"}
              />
              <CompanyIconCard
                icon={buildingIcon}
                header={"Industry"}
                des={"e-Commerce"}
              />
            </div>

            <p>
              Back in 2021, Gorgias consulted Coachello for its challenges
              resulting from hyper growth; employees were experiencing increased
              levels of stress and potentially heading towards burnout. These
              challenges were evidenced in decreased productivity, conflict, and
              overall weariness. Gorgias needed to find a program that would
              help develop their employees well-being while also encouraging
              self-development and communication between headquarters and the
              various offices on a global scale.
            </p>
          </>
        }
      />
      <Objectives>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <li className="flex gap-2 items-center m-0">
              <img width={32} height={32} src={l1Icon} />
              <h4 className={"m-0"}>Increase performance</h4>
            </li>
            <li className="flex gap-2 items-center m-0">
              <img width={32} height={32} src={l2Icon} />
              <h4> Increase presenteeism </h4>
            </li>
            <li className="flex gap-2 items-center m-0">
              <img width={32} height={32} src={l3Icon} />
              <h4> Increase resilience </h4>
            </li>
            <li className="flex gap-2 items-center m-0">
              <img width={32} height={32} src={l4Icon} />
              <h4> Increase well-being </h4>
            </li>
            <li className="flex gap-2 items-center m-0">
              <img width={32} height={32} src={l5Icon} />
              <h4>Increase personal-development </h4>
            </li>
            <li className="flex gap-2 items-center m-0">
              <img width={32} height={32} src={l6Icon} />
              <h4> Improve mental strength </h4>
            </li>
          </ul>
        </div>
      </Objectives>
      <CompanyCaseStudyTemplate
        img={GorgiasStudyImg}
        logo={GorgiasLogo}
        header="How Gorgias started creating a coaching culture at scale with
Coachello on-demand "
        rightContentE={
          <>
            <p
              style={{ letterSpacing: "0.28em" }}
              className="text-[#FD0054] text-[18px] uppercase"
            >
              Solution
            </p>
            <p>
              Fortunately enough Gorgias’ Head of People Adeline Bodemer already
              had experienced professional coaching and knew it would be a game
              changer for her employees. She wanted a flexible solution adapted
              to Gorgias culture, meet the diverse development needs of their
              many employees, facilitate engagement with coaches and enable a
              high adoption rate. It was also important that employees could use
              their professional development stipend.
            </p>
            <p>
              We offered Gorgias a customized version of our coaching as a
              benefit solution, organisation wide. The aim was to make coaching
              available to all talents, with a pool of certified coaches that
              match the diversity of Gorgias Talents in terms of nationalities,
              languages, time-zone, hierarchy etc.{" "}
            </p>

            <br />
            <p
              style={{ letterSpacing: "0.28em" }}
              className="text-[#FD0054] text-[18px] uppercase"
            >
              Features
            </p>

            <ul className="leading-6">
              <li>Coachello’s Slack App deployed to all employees</li>
              <li>
                24/7 access to certified coaches worldwide that match the
                diversity of Gorgias talents (over 25 nationalities) in terms of
                culture, languages, time-zone, hierarchy etc.
              </li>
              <li>
                Sensibiliation through on-demand webinars to answer hot topics
                in the company (Burnout Prevention, Morning routine, Managing
                Energy and Understanding organizational Stress)
              </li>
              <li>
                Coaching assessments, confidential chat-line in Slack and
                recommendation calls
              </li>
              <li>Data insights</li>
            </ul>

            <br />

            <p
              style={{ letterSpacing: "0.28em" }}
              className="text-[#FD0054] text-[18px] uppercase"
            >
              Results
            </p>
            <p>
              After a year, <b>the coaching culture is strong at Gorgias</b> and
              is part of the company culture. Implementing this coaching culture
              led to the following outcomes :
            </p>
            <p>
              With a <b>50% adoption the first year</b> and an{" "}
              <b>average of 5 sessions per person</b> that they can use whenever
              they need it the most, we helped Gorgias’ talents improve their{" "}
              <b>
                time management challenges, organizational issues, professional
                development,
              </b>{" "}
              and <b>prevent some burnout risk.</b>
            </p>
            <p>
              On average, nearly <b>70%</b> of Gorgias’ employees have noticed a
              reduction in stress and <b>40% </b>felt an increase of positive
              feelings like optimism and hope. <b>80% of users</b> also report{" "}
              <b>improvement in productivity</b>. Last but not least:{" "}
              <b>coach satisfaction</b> levels are above <b>95%</b>.
            </p>

            <br />
            <Link
              target="_blank"
              to={"https://meetings.hubspot.com/quentin-bouche/intro-coachello"}
            >
              <button className="Navbar-button">
                Learn in 20 minutes how to launch coaching for everyone at your
                company
              </button>
            </Link>
          </>
        }
      />

      <div className="text-center rounded p-8 sm:p-24 bg-[#FDF4EA]">
        <div className="w-full md:w-1/2  m-auto ">
          <p className="h1-red">What our clients say</p>
          <h2>“Incredible progress”</h2>
          <ReactPlayer
            controls={true}
            // light={adelineThumb}
            playing
            width="100%"
            url="https://www.youtube.com/watch?v=s8p-gsnM-hs&t=1s"
            playIcon={<img src={playIcon} />}
          />
          <div className={"bg-white flex-wrap p-5 flex gap-3 justify-between"}>
            <div>
              <h4 className={"m-0"}>Adeline Bodemer</h4>
              <h5 className={"m-2"}>Head of People</h5>
            </div>
            <div>
              <h4 className={"m-0"}>Emna Charfi</h4>
              <h5 className={"m-2"}>Customer success</h5>
            </div>
            <div>
              <h4 className={"m-0"}>Astaeka Pramuditya</h4>
              <h5 className={"m-2"}>Customer Marketing</h5>
            </div>
          </div>
        </div>
      </div>
      <What />
      <Footer />
    </>
  );
};

export default Gorgias;
