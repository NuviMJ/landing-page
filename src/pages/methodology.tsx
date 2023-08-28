import React from "react";
import { CheckOne } from "@icon-park/react";
// @ts-ignore
import heroImg from "../assets/img/methodoly.png";
// @ts-ignore
import methodImg from "../assets/img/method.png";
// @ts-ignore
import sessionImg from "../assets/img/coaching-session.png";
// @ts-ignore
import coachesImg from "../assets/img/coaches.png";
import Assessment from "../sections/Assessment";
import Support from "../sections/Support";
// @ts-ignore
import Layout from "../layouts";
import SvgMorphText from "../components/MorphEffect";
const Methodology = () => {
  return (
    <>
      <Layout>
        {/*section*/}
        <SvgMorphText />
        <div className="section bg-warm">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            <div className="lg:w-1/2 flex flex-col items-start justify-center">
              <h1 className="leading-[1.3] mb-8">Coachello’s Methodology</h1>

              <ul className="flex flex-col gap-3 pl-0 ">
                <span className="font-normal mb-5">
                  Coaching is a developmental intervention implemented in
                  organisations to improve individual attitudes and behaviours.
                  Many scientific studies have now evidenced these positive
                  effects on individuals. Coaching is associated with an
                  increase in:
                </span>

                <li className="icon-text">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.06659 9.20065L5.63325 7.76732C5.51103 7.6451 5.35547 7.58398 5.16659 7.58398C4.9777 7.58398 4.82214 7.6451 4.69992 7.76732C4.5777 7.88954 4.51659 8.0451 4.51659 8.23398C4.51659 8.42287 4.5777 8.57843 4.69992 8.70065L6.59992 10.6007C6.73325 10.734 6.88881 10.8007 7.06659 10.8007C7.24436 10.8007 7.39992 10.734 7.53325 10.6007L11.2999 6.83398C11.4221 6.71176 11.4833 6.55621 11.4833 6.36732C11.4833 6.17843 11.4221 6.02287 11.2999 5.90065C11.1777 5.77843 11.0221 5.71732 10.8333 5.71732C10.6444 5.71732 10.4888 5.77843 10.3666 5.90065L7.06659 9.20065ZM7.99992 14.6673C7.0777 14.6673 6.21103 14.4922 5.39992 14.142C4.58881 13.7918 3.88325 13.3169 3.28325 12.7173C2.68325 12.1173 2.20836 11.4118 1.85859 10.6007C1.50881 9.78954 1.3337 8.92287 1.33325 8.00065C1.33325 7.07843 1.50836 6.21176 1.85859 5.40065C2.20881 4.58954 2.6837 3.88398 3.28325 3.28398C3.88325 2.68398 4.58881 2.2091 5.39992 1.85932C6.21103 1.50954 7.0777 1.33443 7.99992 1.33398C8.92214 1.33398 9.78881 1.5091 10.5999 1.85932C11.411 2.20954 12.1166 2.68443 12.7166 3.28398C13.3166 3.88398 13.7917 4.58954 14.1419 5.40065C14.4921 6.21176 14.667 7.07843 14.6666 8.00065C14.6666 8.92287 14.4915 9.78954 14.1413 10.6007C13.791 11.4118 13.3161 12.1173 12.7166 12.7173C12.1166 13.3173 11.411 13.7924 10.5999 14.1427C9.78881 14.4929 8.92214 14.6678 7.99992 14.6673Z"
                      fill="#72B78E"
                    />
                  </svg>

                  <span>
                    <b className="font-semibold">Self-efficacy:</b> the belief
                    and confidence in one’s capabilities to overcome their
                    challenges with their own resources
                  </span>
                </li>
                <li className="icon-text">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.06659 9.20065L5.63325 7.76732C5.51103 7.6451 5.35547 7.58398 5.16659 7.58398C4.9777 7.58398 4.82214 7.6451 4.69992 7.76732C4.5777 7.88954 4.51659 8.0451 4.51659 8.23398C4.51659 8.42287 4.5777 8.57843 4.69992 8.70065L6.59992 10.6007C6.73325 10.734 6.88881 10.8007 7.06659 10.8007C7.24436 10.8007 7.39992 10.734 7.53325 10.6007L11.2999 6.83398C11.4221 6.71176 11.4833 6.55621 11.4833 6.36732C11.4833 6.17843 11.4221 6.02287 11.2999 5.90065C11.1777 5.77843 11.0221 5.71732 10.8333 5.71732C10.6444 5.71732 10.4888 5.77843 10.3666 5.90065L7.06659 9.20065ZM7.99992 14.6673C7.0777 14.6673 6.21103 14.4922 5.39992 14.142C4.58881 13.7918 3.88325 13.3169 3.28325 12.7173C2.68325 12.1173 2.20836 11.4118 1.85859 10.6007C1.50881 9.78954 1.3337 8.92287 1.33325 8.00065C1.33325 7.07843 1.50836 6.21176 1.85859 5.40065C2.20881 4.58954 2.6837 3.88398 3.28325 3.28398C3.88325 2.68398 4.58881 2.2091 5.39992 1.85932C6.21103 1.50954 7.0777 1.33443 7.99992 1.33398C8.92214 1.33398 9.78881 1.5091 10.5999 1.85932C11.411 2.20954 12.1166 2.68443 12.7166 3.28398C13.3166 3.88398 13.7917 4.58954 14.1419 5.40065C14.4921 6.21176 14.667 7.07843 14.6666 8.00065C14.6666 8.92287 14.4915 9.78954 14.1413 10.6007C13.791 11.4118 13.3161 12.1173 12.7166 12.7173C12.1166 13.3173 11.411 13.7924 10.5999 14.1427C9.78881 14.4929 8.92214 14.6678 7.99992 14.6673Z"
                      fill="#72B78E"
                    />
                  </svg>
                  <span>
                    <b className="font-semibold">Hope:</b> a motivational state
                    characterized by a sense of agency toward achieving goals
                  </span>
                </li>
                <li className="icon-text">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.06659 9.20065L5.63325 7.76732C5.51103 7.6451 5.35547 7.58398 5.16659 7.58398C4.9777 7.58398 4.82214 7.6451 4.69992 7.76732C4.5777 7.88954 4.51659 8.0451 4.51659 8.23398C4.51659 8.42287 4.5777 8.57843 4.69992 8.70065L6.59992 10.6007C6.73325 10.734 6.88881 10.8007 7.06659 10.8007C7.24436 10.8007 7.39992 10.734 7.53325 10.6007L11.2999 6.83398C11.4221 6.71176 11.4833 6.55621 11.4833 6.36732C11.4833 6.17843 11.4221 6.02287 11.2999 5.90065C11.1777 5.77843 11.0221 5.71732 10.8333 5.71732C10.6444 5.71732 10.4888 5.77843 10.3666 5.90065L7.06659 9.20065ZM7.99992 14.6673C7.0777 14.6673 6.21103 14.4922 5.39992 14.142C4.58881 13.7918 3.88325 13.3169 3.28325 12.7173C2.68325 12.1173 2.20836 11.4118 1.85859 10.6007C1.50881 9.78954 1.3337 8.92287 1.33325 8.00065C1.33325 7.07843 1.50836 6.21176 1.85859 5.40065C2.20881 4.58954 2.6837 3.88398 3.28325 3.28398C3.88325 2.68398 4.58881 2.2091 5.39992 1.85932C6.21103 1.50954 7.0777 1.33443 7.99992 1.33398C8.92214 1.33398 9.78881 1.5091 10.5999 1.85932C11.411 2.20954 12.1166 2.68443 12.7166 3.28398C13.3166 3.88398 13.7917 4.58954 14.1419 5.40065C14.4921 6.21176 14.667 7.07843 14.6666 8.00065C14.6666 8.92287 14.4915 9.78954 14.1413 10.6007C13.791 11.4118 13.3161 12.1173 12.7166 12.7173C12.1166 13.3173 11.411 13.7924 10.5999 14.1427C9.78881 14.4929 8.92214 14.6678 7.99992 14.6673Z"
                      fill="#72B78E"
                    />
                  </svg>
                  <span>
                    <b className="font-semibold">Optimism:</b> positive
                    attribution about the future, research suggests that
                    coachees unlock this mindset while working with their coach
                    through interventions that focus on being one’s best
                    possible self
                  </span>
                </li>
                <li className="icon-text">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.06659 9.20065L5.63325 7.76732C5.51103 7.6451 5.35547 7.58398 5.16659 7.58398C4.9777 7.58398 4.82214 7.6451 4.69992 7.76732C4.5777 7.88954 4.51659 8.0451 4.51659 8.23398C4.51659 8.42287 4.5777 8.57843 4.69992 8.70065L6.59992 10.6007C6.73325 10.734 6.88881 10.8007 7.06659 10.8007C7.24436 10.8007 7.39992 10.734 7.53325 10.6007L11.2999 6.83398C11.4221 6.71176 11.4833 6.55621 11.4833 6.36732C11.4833 6.17843 11.4221 6.02287 11.2999 5.90065C11.1777 5.77843 11.0221 5.71732 10.8333 5.71732C10.6444 5.71732 10.4888 5.77843 10.3666 5.90065L7.06659 9.20065ZM7.99992 14.6673C7.0777 14.6673 6.21103 14.4922 5.39992 14.142C4.58881 13.7918 3.88325 13.3169 3.28325 12.7173C2.68325 12.1173 2.20836 11.4118 1.85859 10.6007C1.50881 9.78954 1.3337 8.92287 1.33325 8.00065C1.33325 7.07843 1.50836 6.21176 1.85859 5.40065C2.20881 4.58954 2.6837 3.88398 3.28325 3.28398C3.88325 2.68398 4.58881 2.2091 5.39992 1.85932C6.21103 1.50954 7.0777 1.33443 7.99992 1.33398C8.92214 1.33398 9.78881 1.5091 10.5999 1.85932C11.411 2.20954 12.1166 2.68443 12.7166 3.28398C13.3166 3.88398 13.7917 4.58954 14.1419 5.40065C14.4921 6.21176 14.667 7.07843 14.6666 8.00065C14.6666 8.92287 14.4915 9.78954 14.1413 10.6007C13.791 11.4118 13.3161 12.1173 12.7166 12.7173C12.1166 13.3173 11.411 13.7924 10.5999 14.1427C9.78881 14.4929 8.92214 14.6678 7.99992 14.6673Z"
                      fill="#72B78E"
                    />
                  </svg>
                  <span>
                    <b className="font-semibold">Resilience:</b> the ability to
                    bounce back quickly and effectively from adverse
                    circumstances. Coaches facilitate both behaviours in that
                    they act as a consistent and stable sounding board as well
                    as help coachees cope through cognitive reappraisal.
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img style={{ maxWidth: "100%" }} src={heroImg} />
            </div>
          </div>
        </div>
        {/*section*/}
        <div className="section bg-white flex md:gap-24">
          <div className="flex-1">
            <h2 className="mb-10">
              The Coachello <br />
              Method
            </h2>
            <p>
              Coachello combines human support, data and technology to scale the
              effectiveness and well-being of leaders at all levels with
              one-on-one coaching. We do so by giving access to our MS Teams /
              Slack App, Admin Dashboard and 400+ community of coaches.
            </p>
          </div>
          <div className="flex-1">
            <svg
              width="73"
              height="51"
              viewBox="0 0 73 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.0714 0L15.6429 20.4H31.2857V51H0V20.4L10.4286 0H26.0714ZM67.7857 0L57.3571 20.4H73V51H41.7143V20.4L52.1429 0H67.7857Z"
                fill="#FECBC4"
              />
            </svg>

            <h3 className="my-5">
              Coachello equals data-driven personalised people support. Beyond
              learning.
            </h3>
          </div>
        </div>

        {/*section*/}
        <div className="section bg-white flex gap-20">
          <div className="flex-1">
            <img src={methodImg} className="w-full" />
          </div>
          <div className="flex-1">
            <h2 className="my-5">How it works</h2>
            <p className="my-5">
              An employee can use our MS Teams or Slack app access for async
              coaching and 1:1 live coaching with a certified professional
              coach. We have included tools inside the app to self-evaluate and
              evaluate with peers “360 Speed” to help employees find growth
              opportunities. Every program is fully personalised to their needs.
              We use a combination of AI and human support to optimise the
              matching between coach and coachee. We are then able to provide
              organisations with aggregated, anonymised data and insights on the
              coachees’ progress as a result of their coaching program.
            </p>
            <b className="">We designed 2 programs: </b>
            <div className="flex gap-5 my-5">
              <div className="p-5 bg-warm rounded flex-1">
                <b className="my-5">Leadership coaching</b>
                <p className="my-5">
                  Designed to work on leadership behaviours{" "}
                </p>
              </div>
              <div className="p-5 bg-warm rounded flex-1">
                <b className="my-5">On-demand coaching</b>
                <p className="my-5">
                  Designed to work on any professional subject that is important
                  to the coachee{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Assessment />
        {/*section*/}
        <div className="section bg-green-light">
          <h2 className="mb-10">Coachello coaching categories</h2>

          <div className="">
            <p className="my-5">Scientific analysis</p>
            <p className="my-5">
              There are unlimited coaching topics and bearing in mind that
              coaches coach humans and not subject matter, categorizing it is
              not an easy task. Our data scientists have used aggregated data
              from thousands of Coachello coaching sessions to structure the
              different topics. They found that they could classify the coaching
              goals into 32 coaching categories which could in turn be
              classified into 8 main categories. Any coaching goal expressed
              specifically by a coachee can be linked to one of the 32
              sub-categories and in turn into the 8 coaching categories.
              <br />
              For the coachee, the tracking of the coaching categories of each
              of their session aims at tracking their progress as well as
              gaining perspective on their individual, specific goal by putting
              them in a larger work area.
            </p>
            <p className="my-5">
              On the client’s side, the coaching categories allow us to provide
              metrics regarding the topics discussed in sessions at their
              company. We are therefore able to evidence the most worked-on
              coaching categories.
            </p>
            <p className="my-5">
              This allows our clients the possibility to act upon the challenges
              of their (emerging) leaders in their organisation. If a certain
              category is overrepresented in your organisation it might be wise
              to take action. With Coachello we support our clients and share
              strategies on how to act upon pain points, challenges and blind
              spots.
            </p>
          </div>
        </div>

        <Support />

        {/*section*/}
        <div className="section bg-warm flex gap-20">
          <div className="flex-1">
            <img src={sessionImg} className="w-full" />
          </div>
          <div className="flex-1">
            <h2 className="my-5">Coachello coaching sessions</h2>
            <p className="my-5">
              Coachello coaching sessions are fully confidential. We never share
              personal information with one’s employer or third parties. That
              said, when sufficient sessions are being held, allowing
              confidentiality compliance, organisations do receive detailed,
              aggregated, anonymised analytics on development, growth and
              behavioural changes throughout the coaching progress.
            </p>
            <p className="my-5">
              Although the number of sessions needed is fully personal and up to
              the discretion of our clients, the latest science on coaching
              recommends 6-8 sessions as the most efficient number of sessions
              for a coaching program. Studies show that coaching may become
              conversational when it is offered in an unlimited format.
            </p>
          </div>
        </div>

        {/*section*/}
        <div className="section bg-white">
          <h2 className="mb-10">A coaching session from beginning to end</h2>
          <p className="my-5">
            Coachello’s methodology lets our coaches coach each coachee in a
            personalised way on any soft-skills topic. Coachello’s coaches
            follow the GROW methodology in sessions:
          </p>
          <div className="flex flex-col gap-8 md:w-1/2">
            <div className="flex gap-5 items-center">
              <h3 className="font-bold uppercase ">G</h3>
              <p>goal setting</p>
            </div>
            <div className="flex gap-5 items-center">
              <h3 className="font-bold uppercase ">R</h3>
              <p>
                exploration of the reality of coaching with powerful questions
                and exercises deemed relevant at the time, awareness emerges
                during this part of the interview. The coachee becomes aware of
                a new possibility, a new option that he/she had never thought of
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <h3 className="font-bold uppercase ">O</h3>
              <p>
                exploration of the options that the coachee can put in place to
                reach his/her goal following his/her awareness and finally
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <h3 className="font-bold uppercase ">W</h3>
              <p>
                will, commitment to a concrete plan of action of which the coach
                verifies the feasibility, the motivation of the coachee to do it
                and the concrete possibility to do it.
              </p>
            </div>
            <p className="my-5">
              They use any tool and exercise that is relevant for a specific
              coachee, at a specific time, working on their false, limiting
              beliefs, authentic needs and values in their unique environment.
              Coachees will understand their environment, themselves and others
              better, and plan actions to reach their goals with the support of
              their coach.
            </p>
          </div>
        </div>

        {/*section*/}
        <div className="section bg-orange-light flex gap-10">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <h2 className="mb-10">Periodic check-in</h2>
            <p className="my-5">
              During a periodic check-in, a coachee will re-assess their level
              of satisfaction with different areas of their professional life.
              They can analyse change - thanks to coaching - and may take action
              in areas that require attention. This will always remain the sole
              discretion of the coachee.
            </p>
          </div>
        </div>

        {/*section*/}
        <div className="section bg-white">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            <div className="lg:w-1/2 flex flex-col items-start justify-center">
              <h1 className="leading-[1.3] mb-8">Coachello coaches</h1>
              <p>
                Coachello coaches are world-class professional coaches that have
                been rigorously vetted. We only accept 5% of all coach
                applicants through an AI-powered selection procedure. All our
                coaches are certified and have registered a minimum of 500
                coaching hours with leading coaching organisations such as the
                International Coaching Federation or the European Mentoring and
                Coaching Council. Coachello coaches bank on a professional
                career of a minimum of 10 years and possess a high level of
                autonomy and empathy. Coachello is unique in that over 80% of
                its coaching community can coach in multiple languages. They are
                top-tier professionals that can help your (emerging) leaders to
                the next level.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img style={{ maxWidth: "100%" }} src={coachesImg} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Methodology;
