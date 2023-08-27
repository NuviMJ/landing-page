import React from "react";
import HelpCard from "../components/HelpCard";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// @ts-ignore
import averageIcon from "../assets/img/outcome/outcome1.png";
// @ts-ignore
import satisfactionIcon from "../assets/img/outcome/outcome2.png";
// @ts-ignore
import roiIcon from "../assets/img/outcome/outcome3.png";
// @ts-ignore
import timeIcon from "../assets/img/outcome/outcome4.png";

const Outcome = () => {
  return (
    <div className="section bg-warm">
      <h2 className="text-center mb-7">Outcome based</h2>
      <div className="grid lg:grid-cols-2 gap-5 lg:px-40">
        <div className="flex flex-col gap-5">
          <HelpCard
            value={
              <CountUp suffix="%" end={70} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            }
            header="Average progress"
            des="From the start to the end of their coaching program, including observable behaviours. Based on over 2500+ coachings through Coachello"
            icon={averageIcon}
          />

          <HelpCard
            valueSuffix="/5"
            value={
              <CountUp decimals={2} end={4.95} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            }
            header="Satisfaction"
            des="Average coachee satisfaction"
            icon={roiIcon}
          />
        </div>
        <div className="flex flex-col gap-5">
          <HelpCard
            value={
              <CountUp suffix="x" start={1} end={7} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            }
            header="ROI"
            des="Data-driven, linked to your LMS or HRIS"
            icon={satisfactionIcon}
          />

          <HelpCard
            value={
              <CountUp suffix="%" start={1} end={75} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            }
            header="Identified behavioural change"
            des="Reported by peers"
            icon={timeIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Outcome;
