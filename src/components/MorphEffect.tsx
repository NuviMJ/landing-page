import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const textArray = ["Text 1", "Text 2", "Text 3"]; // Replace with your array of texts

function SvgMorphText() {
  const textRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    timeline.set(textRef.current, { visibility: "hidden" });

    textArray.forEach((text, index) => {
      const path = text
        .split("")
        .map(() => pathRef.current.getAttribute("d"))
        .join(" ");

      timeline.to(textRef.current, {
        duration: 1,
        morphSVG: path,
        ease: "power1.inOut",
        visibility: "visible",
      });

      if (index < textArray.length - 1) {
        timeline.to(textRef.current, {
          duration: 1,
          opacity: 0,
        });
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        viewBox="0 0 200 60"
        xmlns="http://www.w3.org/2000/svg"
        ref={textRef}
        className="text-4xl font-bold fill-current"
      >
        <path ref={pathRef} d="M10,30 Q100,10 190,30" />
      </svg>
    </div>
  );
}

export default SvgMorphText;
