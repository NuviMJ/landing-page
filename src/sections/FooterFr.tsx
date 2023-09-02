import React, { useEffect, useState } from "react";
// @ts-ignore
import coachelloLogo from "../assets/img/old/header.svg";
// @ts-ignore
import laFrenchTechLogo from "../assets/img/La French Tech.png";
// @ts-ignore
import msLogo from "../assets/img/ms-cert.png";
// @ts-ignore
import stationFLogo from "../assets/img/stationf-logo.png";
// @ts-ignore
import globalCompactLogo from "../assets/img/old/globalCompactLogo.png";
// @ts-ignore
import instaIcon from "../assets/img/insta.png";
// @ts-ignore
import linkedInIcon from "../assets/img/linkedin.png";
import { Link } from "gatsby";
import Input from "../components/form/Input";
import InputWithIcon from "../components/form/InputWithIcon";
import { EmailBlock, Envelope, EnvelopeOne } from "@icon-park/react";
import useLocale from "../hooks/useLocale";

const Footer = () => {
  const [prefix, setPrefix] = useState("");
  const locale = useLocale();
  useEffect(() => {
    setPrefix(locale == "fr" ? "/fr" : "");
  }, [locale]);
  return (
    <footer className="bg-white section text-black">
      <hr className="border-gray/10 mb-10" />

      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
        <div className="flex flex-col flex-1">
          <img className="w-48" src={coachelloLogo} alt="Coachello Logo" />
          <p className="my-4">
            coaching individuel intégré dans l'environnement de travail pour accompagner la transformation individuelle des leaders et le succès des organisations
          </p>
          <div className="flex gap-5 items-center">
            <img
              src={laFrenchTechLogo}
              alt="La French Tech Logo"
              className="h-10"
            />
            <img
              src={msLogo}
              alt="Microsoft 365 certification"
              className="h-10"
            />
            <img src={stationFLogo} alt="StationF Logo" className="h-4" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="mb-5">HQ</h4>
          <p className="mb-5">103 Rue du Temple 75003 Paris FRANCE</p>
          <p className="mb-5">
            Bernard Kochstraat 3-3 1075LJ Amsterdam NETHERLANDS
          </p>
        </div>

        <div className="flex flex-col flex-1 gap-5">
          <Link to={`${prefix}/about`} className="mb-2">
            À propos
          </Link>

          <Link to="/privacy-policy" className="mb-2">
            Politique de confidentialité
          </Link>
          <Link to="/terms-and-conditions" className="mb-2">
            Conditions générales
          </Link>
          <Link to={`${prefix}/coaches`} className="mb-2">
            Je suis un coach
          </Link>

          <Link to={`${prefix}/methodology`}>Methodology</Link>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <a className="mb-2">Je suis un employé</a>
          {/*<Link to="/policies" className="mb-2">Policies</Link>*/}
          {/*<a*/}
          {/*  href="https://meetings.hubspot.com/quentin-bouche/intro-coachello"*/}
          {/*  target="_blank"*/}
          {/*  className="mb-2"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*</a>*/}
          <a href="https://legal.coachello.io/en/" className="mb-2">
            Politiques
          </a>
          <Link to="/talk-to-expert"> Parler à un expert</Link>

          <Link to="/metaverse">Métavers</Link>
        </div>
        <div className="">
          <div className="flex items-start gap-5">
            <a
              href="https://www.instagram.com/coachello.io"
              target="_blank"
              className=""
              rel="noopener noreferrer"
            >
              <img src={instaIcon} alt="Instagram" className="w-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/coachello-io"
              target="_blank"
              className=""
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="w-8" />
            </a>
          </div>
          <p className="my-5 font-extralight">
            You don't have a project yet but want to receive innovative content on soft-skills and invitations for future webinars? {" "}
          </p>
          <p className="my-5 font-extralight">
            Subscribe to our monthly selection of ressources and webinars for HR / L&D leaders
          </p>
          <InputWithIcon
            right={true}
            icon={
              <EnvelopeOne className="text-white flex items-center justify-center bg-black" />
            }
            placeholder={"Your email address"}
            type="email"
            name="email"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;