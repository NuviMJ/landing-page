import React from "react";
// @ts-ignore
import coachelloLogo from "../../assets/img/old/header.svg";
// @ts-ignore
import laFrenchTechLogo from "../../assets/img/La French Tech.png";
// @ts-ignore
import msLogo from "../../assets/img/ms-cert.png";
// @ts-ignore
import stationFLogo from "../../assets/img/stationf-logo.png";
// @ts-ignore
import globalCompactLogo from "../../assets/img/old/globalCompactLogo.png";
// @ts-ignore
import instaIcon from "../../assets/img/insta.png";
// @ts-ignore
import linkedInIcon from "../../assets/img/linkedin.png";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="bg-white section text-black">
      <hr className="border-gray/10 mb-10" />

      <div className="flex justify-center gap-8 md:gap-20">
        <div className="flex flex-col flex-1.5">
          <img className="mt-4 w-48" src={coachelloLogo} alt="Coachello Logo" />
          <p className="mt-4">
            Embedding 1:1 coaching in the workplace of identified leaders to
            accelerate personal and organisational transformation
          </p>
          <div className="flex gap-5 items-center">
            <img
              src={laFrenchTechLogo}
              alt="La French Tech Logo"
              className="w-20"
            />
            <img
              src={msLogo}
              alt="Microsoft 365 certification"
              className="w-20"
            />
            <img src={stationFLogo} alt="StationF Logo" className="w-20" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="mt-0">HQ</h4>
          <p>103 Rue du Temple 75003 Paris FRANCE</p>
          <p>Bernard Kochstraat 3-3 1075LJ Amsterdam NETHERLANDS</p>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <Link to="/about" className="mb-2">
            About
          </Link>
          <a href="https://legal.coachello.io/en/" className="mb-2">
            Legal & Admin Support
          </a>
          {/* Uncomment and modify links as needed */}
          {/* <Link to="/privacy-policy" className="mb-2">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="mb-2">Terms & Conditions</Link> */}
          <Link to="/coaches" className="mb-2">
            I am a coach
          </Link>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <a className="mb-2">I am an employee</a>
          {/*<Link to="/policies" className="mb-2">Policies</Link>*/}
          <a
            href="https://meetings.hubspot.com/quentin-bouche/intro-coachello"
            target="_blank"
            className="mb-2"
            rel="noopener noreferrer"
          >
            Speak to an expert
          </a>
          <Link to="/metaverse">Metaverse</Link>
        </div>
        <div className="">
          <div className="flex items-start">
            <img src={instaIcon} alt="Instagram" className="w-8" />
            <img src={linkedInIcon} alt="LinkedIn" className="w-8" />
          </div>
          <p>
            You don't have a project yet but want to receive innovative content
            on soft-skills and invitations for future webinars?{" "}
          </p>
          <p>
            Subscribe to our monthly selection of ressources and webinars for HR
            / L&D leaders
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
