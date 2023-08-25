import React, { useState } from "react";
import "./Accordion.scss";
interface Props {
  title: string;
  content: any;
}
const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="Accordion-item">
      <div className="Accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="Accordion-content">
          {" "}
          {content} <hr className="border-gray/20" />
        </div>
      )}
    </div>
  );
};

export default Accordion;
