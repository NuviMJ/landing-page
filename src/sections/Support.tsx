import React from "react";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/support/1.png";
// @ts-ignore
import i2Img from "../assets/img/support/2.png";
// @ts-ignore
import i3Img from "../assets/img/support/3.png";
// @ts-ignore
import i4Img from "../assets/img/support/4.png";
// @ts-ignore
import i5Img from "../assets/img/support/5.png";
// @ts-ignore
import i6Img from "../assets/img/support/6.png";
// @ts-ignore
import i7Img from "../assets/img/support/7.png";
// @ts-ignore
import i8Img from "../assets/img/support/8.png";
// @ts-ignore
import i11Img from "../assets/img/support/11.png";
// @ts-ignore
import i22Img from "../assets/img/support/22.png";
// @ts-ignore
import i33Img from "../assets/img/support/33.png";
// @ts-ignore
import i44Img from "../assets/img/support/44.png";
// @ts-ignore
import i55Img from "../assets/img/support/55.png";
// @ts-ignore
import i66Img from "../assets/img/support/66.png";
// @ts-ignore
import i77Img from "../assets/img/support/77.png";
// @ts-ignore
import i88Img from "../assets/img/support/88.png";

const Support = () => {
  return (
    <>
      <div className="section bg-white">
        <h2 className="text-center mb-5">
          Areas that Coachello supports in an on-demand <br />
          program:
        </h2>
        <p className="text-center mb-10">
          We support the whole professional in all their challenges, whatever
          they are :
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <IconCard
            icon={i1Img}
            header="Career Development"
            color="bg-green-light"
            des="Career transition, career planning, meaning at work, imposter syndrome"
          />
          <IconCard
            header="Work environment"
            icon={i2Img}
            color="bg-warm-dark"
            des="Hybrid work environment, influence and network, collective intelligence, adaptability to change"
          />
          <IconCard
            header="Job performance"
            icon={i3Img}
            color="bg-green-light"
            des="Public speaking, productivity, time management, feedback & recognition"
          />
          <IconCard
            header="Leadership"
            icon={i4Img}
            color="bg-warm-dark"
            des="Natural leadership posture, management skills, authenticity, manager coach posture"
          />
          <IconCard
            header="Communication"
            icon={i5Img}
            color="bg-warm-dark"
            des="Assertiveness, empathy, listening skills, navigate conflict"
          />
          <IconCard
            header="Quality of life"
            icon={i6Img}
            color="bg-green-light"
            des="Interests, motivation, relationships at work, work-life balance"
          />
          <IconCard
            header="Self-awareness"
            icon={i7Img}
            color="bg-warm-dark"
            des="Needs to perform, values identification, strengths exploring, blind spots uncovering"
          />
          <IconCard
            header="Stress and anxiety"
            icon={i8Img}
            color="bg-green-light"
            des="Stress and anxiety management, well-being improvement, resilience, burnout prevention"
          />
        </div>
      </div>
      <div className="section bg-white">
        <h2 className="text-center mb-5">
          Areas that Coachello supports in a leadership program:
        </h2>
        <p className="text-center mb-5">
          With the help of our community of coaches around the world and based
          on scientific research, we have identified 10 leadership behaviours
          leaders can work on to improve their skills as a leader.
        </p>
        <p className="text-center mb-10">
          In a leadership program, coachees will work on the following
          leadership skills. Each of their session’s specific goals will be
          linked (by coach and coachee) to one of the 10 following leadership
          behaviours. Kindly note that these behaviours can be customized for
          each client.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <IconCard
            icon={i11Img}
            header="Openess"
            color="bg-green-light"
            des="is curious and open to new ideas"
          />
          <IconCard
            header="Commitment"
            icon={i22Img}
            color="bg-warm-dark"
            des="setting goals and commits to their realization"
          />
          <IconCard
            header="Vision"
            icon={i33Img}
            color="bg-green-light"
            des="constructs long-term vision"
          />
          <IconCard
            header="Empowerment"
            icon={i44Img}
            color="bg-warm-dark"
            des="allows their team and individuals to perform"
          />
          <IconCard
            header="Competence"
            icon={i55Img}
            color="bg-warm-dark"
            des="being an expert as well as a leader"
          />
          <IconCard
            header="Authenticity"
            icon={i66Img}
            color="bg-green-light"
            des="aligns their action and speech"
          />
          <IconCard
            header="Collaboration"
            icon={i77Img}
            color="bg-warm-dark"
            des="has an inclusive work attitude"
          />
          <IconCard
            header="ESR"
            icon={i88Img}
            color="bg-green-light"
            des="Ethical and social responsibility to act with all stakeholders in mind"
          />
        </div>
      </div>
    </>
  );
};

export default Support;
