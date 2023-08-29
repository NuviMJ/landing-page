import React, { useEffect, useState } from "react";

const texts = ["Why", "is", "this", "so", "satisfying", "to", "watch?"];

const morphTime = 1;
const cooldownTime = 0.25;

const MorphingText: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [morph, setMorph] = useState(0);
  const [cooldown, setCooldown] = useState(cooldownTime);

  const doMorph = () => {
    setMorph((prevMorph) => {
      setCooldown(0);
      let newMorph = prevMorph - cooldown;
      if (newMorph < 0) {
        setCooldown(cooldownTime);
        newMorph = 0;
      }
      return newMorph;
    });
  };

  const doCooldown = () => {
    setMorph(0);
    setCooldown(0);
  };

  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = 10 / 1000;
      time = newTime;
      setCooldown((prevCooldown) => prevCooldown - dt);

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }

        doMorph();
      } else {
        doCooldown();
      }
    };

    let time = new Date();
    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  const svgStyle = {
    filter: `blur(${Math.min(8 / morph - 8, 100)}px)`,
    opacity: `${Math.pow(morph, 0.4) * 100}%`,
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="absolute w-full text-center"
        style={{
          filter: `blur(${Math.min(8 / (1 - morph) - 8, 100)}px)`,
          opacity: `${Math.pow(1 - morph, 0.4) * 100}%`,
        }}
      >
        <span
          id="text1"
          className="inline-block w-full font-semibold text-9xl select-none"
        >
          {texts[textIndex % texts.length]}
        </span>
        <span
          id="text2"
          className="inline-block w-full font-semibold text-9xl select-none"
        >
          {texts[(textIndex + 1) % texts.length]}
        </span>
      </div>
      <svg id="filters" className="hidden" style={svgStyle}>
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default MorphingText;
