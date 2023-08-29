import React from "react";
// @ts-ignore
import heroImg from "../assets/img/group-workshop.png";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/group-workshop/c1.png";
// @ts-ignore
import i2Img from "../assets/img/group-workshop/c2.png";
// @ts-ignore
import i3Img from "../assets/img/group-workshop/c3.png";
// @ts-ignore
import i4Img from "../assets/img/group-workshop/c4.png";
import Faq from "../sections/Faq";
// @ts-ignore
import Layout from "../layouts";
import { GreenTick } from "../components/GreenTick";
const GroupWorkshop = () => {
  return (
    <>
      <Layout>
        {/*section*/}
        <div className="section bg-warm">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            <div className="lg:w-1/2 flex flex-col items-start justify-center">
              <h1 className="leading-[1.3] mb-8">Group workshops</h1>

              <ul className="flex flex-col gap-3 pl-0 ">
                <span className="font-semibold mb-5">
                  Tailor made group workshops
                </span>

                <li className="icon-text">
                  <GreenTick />
                  Strengthen your leaders relationships and the company's
                  culture
                </li>
                <li className="icon-text">
                  <GreenTick />
                  Reinforce cohesion, collaboration and productivity
                </li>
                <li className="icon-text">
                  <GreenTick />
                  Build a common managerial culture
                </li>
                <li className="icon-text">
                  <GreenTick />
                  Use collective intelligence
                </li>
                <li className="icon-text">
                  <GreenTick />
                  Bring purpose
                </li>
                <li className="icon-text">
                  <GreenTick />
                  Resolve conflicts
                </li>
              </ul>
            </div>
            <div className="lg:w-2/5">
              <img style={{ maxWidth: "100%" }} src={heroImg} />
            </div>
          </div>
        </div>

        {/*Section*/}
        <div className="section bg-white">
          <h2 className="text-center mb-8">Case-studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <IconCard
              icon={i1Img}
              header={"DISC"}
              color="bg-green-light"
              des="Qonto gives the opportunity for each team to do a DISC assessment during offsites to improve communication."
            />
            <IconCard
              icon={i2Img}
              header={"Public speaking"}
              color="bg-warm-dark"
              des="Virtuo is working with Coachello for all Public Speaking workshops in French and English to empower every Talent."
            />
            <IconCard
              icon={i3Img}
              header={"Management training"}
              color="bg-green-light"
              des="Amplitude Studios trained all their managers with Coachello's 'manager of the future' workshop to create a common managerial culture"
            />
            <IconCard
              icon={i4Img}
              header={"Co-development"}
              color="bg-warm-dark"
              des="Qonto is training their People Business Partner to the co-development methodology to scale co-development within the company"
            />
          </div>
        </div>
        <Faq />
      </Layout>
    </>
  );
};

export default GroupWorkshop;
