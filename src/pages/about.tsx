import * as React from "react";
import Navbar from "../sections/Navbar/Navbar";

// @ts-ignore
import CongueImg from "../assets/img/about.png";
// @ts-ignore
import philosopyImg from "../assets/img/philosophy.png";
import Footer from "../sections/Footer";
import ImgContentTemplateRed from "../components/old/ImgContentTemplateRed/ImgContentTemplateRed";
import CoreTeam from "../sections/old/CoreTeam/CoreTeam";
// @ts-ignore
import Seo from "../utils/seo";
import Human from "../sections/Human";
import Recognition from "../sections/Recognition";
// @ts-ignore
import Layout from "../layouts";

const AboutPage = () => {
  return (
    <>
      <Seo title="Coachello - About Us" />
      <Layout>
        <div className="section bg-warm">
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <div className="lg:w-3/5 flex flex-col items-start justify-center">
              <h1 className="leading-[1.3] mb-8">
                About
                <br /> Coachello
              </h1>
            </div>
            <div className="lg:w-2/5">
              <img style={{ maxWidth: "100%" }} src={CongueImg} />
            </div>
          </div>
        </div>

        <Human />

        <div className="section bg-warm">
          <div className="flex gap-10 flex-col md:flex-row">
            <img className="md:w-2/5 object-contain" src={philosopyImg} />
            <div className="md:p-16">
              <div className="">
                <p className="red-heading">Our Philosophy</p>
                <h2 className="mt-3 mb-10">
                  {" "}
                  To allow every organization around the globe to have coaching
                  embedded in the workplace so that they can be sustainable on
                  all aspects
                </h2>
              </div>
              <p className="my-5">
                We are driven by human connections but propelled by technical
                innovation and are highly data driven.
              </p>
              <button className="dashboard-button bg-black rounded-full ">
                Let's discuss your project!
              </button>
            </div>
          </div>
        </div>

        <Recognition />
      </Layout>
    </>
  );
};

export default AboutPage;
