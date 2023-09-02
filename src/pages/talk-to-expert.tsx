import React, { useState } from "react";
// @ts-ignore
import Layout from "../layouts";
// @ts-ignore
import i1Img from "../assets/img/coaches/clarisse.png";
import Input from "../components/form/Input";
import SelectBox from "../components/form/SelectBox";
import MyDatePicker from "../components/form/MyDatePicker";
import Textarea from "../components/form/Textarea";
import PhoneNumberInput from "../components/form/PhoneInput";
import { Link } from "gatsby";
// @ts-ignore
import microsoftLogo from "../assets/img/companies/microsoft.png";
// @ts-ignore
import boltLogo from "../assets/img/companies/boltLogo.png";
// @ts-ignore
import gorgiasLogo from "../assets/img/companies/gorgiasLogo.png";
// @ts-ignore
import hylandLogo from "../assets/img/companies/hylandLogo.png";
// @ts-ignore
import meilleursLogo from "../assets/img/companies/meilleursLogo.png";
// @ts-ignore
import morningLogo from "../assets/img/companies/morningLogo.png";
// @ts-ignore
import enedisLogo from "../assets/img/companies/enedis.png";
// @ts-ignore
import qontoLogo from "../assets/img/companies/qontoLogo.png";
// @ts-ignore
import hecLogo from "../assets/img/companies/HEC.png";

const TalkToExpert = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };
  return (
    <Layout>
      {/*section*/}
      <div className="section bg-warm flex gap-5 flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="leading-[1.3] mb-8">Here to help!</h1>
          <p className="mb-2">If you are here, different options:</p>
          <ul className="flex flex-col gap-2 pl-4">
            <li className="list-item">
              you are curious to hear more about Coachello
            </li>
            <li className="list-item">
              you want to launch some coaching programs
            </li>
            <li className="list-item">
              you have a workshop project and would like our help
            </li>
            <li className="list-item">
              you would like to see a demo of our platform
            </li>
            <li className="list-item">you would like to become a partner</li>
          </ul>

          <div className="mt-5 rounded-2xl bg-green/50 p-5">
            <b>
              "Coachello is exactly what we were looking for to launch coaching
              programs for our managers. We love the flexibility and pricing
              model. The team helped us create a custom program that fit with
              our company’s culture. My coaching went very well, the sessions
              were beneficial both personally and professionally"
            </b>
            <div className="flex gap-5 items-center mt-5">
              <img className="w-9 h-9 rounded-full" src={i1Img} />
              <p>Clarisse Berriau - DRH Meilleurs Agents</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="p-5 flex flex-col gap-5 w-full">
            <div className="flex gap-5 flex-col md:flex-row">
              <Input label="First name" />
              <Input label="Last name" />
            </div>
            <div className="grid gap-5  lg:grid-cols-2">
              <div className="flex-1 ">
                <Input label="Work email" type="email" />
              </div>
              <div className="flex-1 ">
                <PhoneNumberInput
                  phone={phone}
                  handlePhoneChange={handlePhoneChange}
                />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Company name" />

              <SelectBox
                className=""
                options={[
                  { label: "1-20", value: "100+" },
                  { label: "21-50", value: "100+" },
                  { label: "100+", value: "100+" },
                ]}
                label="Company size"
              />
            </div>
            <Textarea label="How can we help you?" />
            <Textarea label="How did you hear about us?" />
            <p>
              By requesting a meeting with us, you agree to our{" "}
              <Link className="underline" to="/privacy-policy">
                privacy policy
              </Link>
              .
            </p>

            <button className="dashboard-button bg-black rounded-full mr-auto">
              Book a 30 min meeting with an expert
            </button>
            <p>
              If you prefer to schedule a call, please click on this{" "}
              <Link className="underline" to="/privacy-policy">
                agenda
              </Link>{" "}
              and select the best time for you
            </p>
          </div>
        </div>
      </div>

      {/*Section*/}
      <div className="section bg-warm-dark">
        <h2 className="text-center md:text-left">
          Join amazing companies like
        </h2>
        <div className="py-5 flex flex-wrap justify-center md:justify-start [&>div>img]:h-12">
          <div>
            <img src={microsoftLogo} />
          </div>
          <div>
            <img src={boltLogo} />
          </div>
          <div>
            <img src={gorgiasLogo} />
          </div>
          <div>
            <img src={hylandLogo} />
          </div>
          <div>
            <img src={meilleursLogo} />
          </div>
          <div>
            <img src={morningLogo} />
          </div>
          <div>
            <img src={enedisLogo} />
          </div>
          <div>
            <img src={qontoLogo} />
          </div>
          <div>
            <img src={hecLogo} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TalkToExpert;
