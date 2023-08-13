import React, { ReactChildren, ReactElement, useEffect } from "react";
import "./SlideShow.scss";
// @ts-ignore
import arrowLeft from "../../../assets/img/old/icons/arrowLeft.svg";
// @ts-ignore
import arrowRight from "../../../assets/img/old/icons/arrowRight.svg";

interface Props {
  delay?: number;
  children: ReactElement[];
  className?: string;
}

const SlideShow = ({ delay = 500000, children, className }: Props) => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === children.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  return (
    <div className={className}>
      <img className="Sidebar-arrow-left" src={arrowLeft} />

      <div className="slideshow-wrapper">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {children.map((child, index) => (
            <div className="slide" key={index}>
              {child}
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {children.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      <img className="Sidebar-arrow-right" src={arrowRight} />
    </div>
  );
};

export default SlideShow;
