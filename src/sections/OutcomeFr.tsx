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
      <h2 className="text-center mb-7">Axé sur les résultats</h2>
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
            header="Progression"
            des="moyenne sur plus de 2500 parcours de coaching"
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
            des="moyenne sur plus de 2500 parcours de coaching"
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
            des="moyen rapporté par nos clients"
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
            header="changements durables et profonds"
            des="observés chez les coachés par leur entourage"
            icon={timeIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Outcome;
