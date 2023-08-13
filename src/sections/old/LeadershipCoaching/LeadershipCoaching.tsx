import React from "react";
import "./LeadershipCoaching.scss";
// @ts-ignore
import leadershipCoachingImg from "../../../assets/img/old/leadershipCoaching.png";
import ImgContentTemplate from "../../../components/old/ImgContentTemplate/ImgContentTemplate";
import ImgContentTemplateRed from "../../../components/old/ImgContentTemplateRed/ImgContentTemplateRed";

const LeadershipCoaching = () => {
  return (
    <ImgContentTemplateRed
      img={leadershipCoachingImg}
      titleE={
        <>
          {" "}
          <h2>Your team is global? So is ours.</h2>
        </>
      }
      redTitle=" Global Excellence                                  "
      desE={
        <>
          {" "}
          <p>
            Global Excellence - is what we require from our coaches. We
            determine their excellence by a two-step interview process,
            reference checks, assessments, and by monitoring their performance
            we can guarantee the coaching quality to all stakeholders.
          </p>
        </>
      }
    />
  );
  // return (
  //         <ImgContentTemplate img={leadershipCoachingImg} title="  Leadership Coaching "
  //                             des={<> <p>You can only be truly performant if all of your employees thrive and you have
  //                                 created a coaching
  //                                 culture within your company. With coaching as a benefit you propose a holistic on-demand
  //                                 coaching solution that brings you just that.
  //                             </p><p>
  //                                 You are a forward-thinking organisation that understands that all your employees have
  //                                 different
  //                                 needs and therefore want to provide a solution that is fully personalised.
  //                             </p><p>
  //                                 With Coachello we provide your talents a confidential solution to help them thrive, no
  //                                 matter if
  //                                 they want to work on public speaking, stress-management, leadership or communication. We
  //                                 are
  //                                 there at the moment they need it most.
  //                             </p><p>
  //                                 On-demand is the best coaching support you can offer your employees as it is fully
  //                                 personalised
  //                                 and there at the moment they need it most. This fully personalised approach doesn’t mean
  //                                 you
  //                                 won’t get insights. Aggregated anonymised insights are available to show you their
  //                                 challenges,
  //                                 their progress, NPS, and eventually a ROI.</p>
  //                             </>}/>
  //
  //
  //     );
};

export default LeadershipCoaching;
