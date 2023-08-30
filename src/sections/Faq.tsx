import React from "react";
import { FAQData } from "../constant/FAQData";
import Accordion from "../components/old/Accordion/Accordion";

const Faq = () => {
  return (
    <div className="section bg-white">
      <div>
        <div className="text-center">
          <p className="red-heading">FAQ</p>
          <h2 className="mb-12">Questions you might have</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-20">
          <div className="flex flex-col gap-5">
            {FAQData.slice(0, Math.ceil(FAQData.length / 2)).map(
              ({ title, content }, index) => (
                <Accordion key={index} title={title} content={content} />
              )
            )}
          </div>
          <div className="flex flex-col gap-5">
            {FAQData.slice(Math.ceil(FAQData.length / 2)).map(
              ({ title, content }, index) => (
                <Accordion key={index} title={title} content={content} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
