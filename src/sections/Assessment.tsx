import React from "react";
import AssessmentCard from "../components/AssessmentCard";

const Assessment = () => {
  return (
    <>
      {/*section*/}
      <div className="section bg-white">
        <div className="">
          <h2 className="text-center mb-12">
            Coachello’s Whole Professional assessment
          </h2>
          <div className="grid lg:grid-cols-3 gap-20 items-start">
            <AssessmentCard
              number="1"
              header="Intake assessment"
              des="The assessment determines the coachee’s level of satisfaction with their own performance and well-being in every aspect of their work prior to being coached. It is the baseline enabling us to measure and analyze progress scientifically"
              color="bg-warm"
            />
            <AssessmentCard
              number="2"
              header="A periodic check-in assessment"
              des="Provided every 4 months to track progress and behavioural change over time. The coachee assesses their own progress"
              color="bg-warm-dark"
            />
            <AssessmentCard
              number="3"
              header="360 Speed"
              des="To collect rapid feedback from colleagues on key behavioural growth opportunities that inform the coaching process"
              color="bg-warm"
            />
          </div>
        </div>
      </div>
      {/*section*/}
      <div className="section bg-white">
        <div className="">
          <h2 className="text-center mb-12">
            Coachello’s Whole Professional assessment
          </h2>
          <div className="grid lg:grid-cols-4 gap-10 items-start">
            <AssessmentCard
              number="1"
              header="Leadership behaviours"
              des="The assessment determines the coachee’s level of satisfaction with their own performance and well-being as a leader prior to being coached. It is the baseline enabling us to measure and analyse progress scientifically."
              color="bg-warm"
            />
            <AssessmentCard
              number="2"
              header="Self-awareness"
              des="Boosted by the 360 Speed in MS Teams or Slack, leaders will get instant feedback on their behaviours."
              color="bg-warm-dark"
            />
            <AssessmentCard
              number="3"
              header="Impact assessment"
              des="Assesses the impact coaching has had on them, as well as on their peers at the end of their program"
              color="bg-warm"
            />
            <AssessmentCard
              number="4"
              header="Periodic check-in to monitor change over time"
              des="Life’s not linear for anyone, we regularly take the temperature to see if additional support is needed."
              color="bg-warm-dark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessment;
