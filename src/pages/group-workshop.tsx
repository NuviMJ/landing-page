import React from "react";
// @ts-ignore
import heroImg from "../assets/img/group-workshop.png";
import IconCard from "../components/IconCard";
// @ts-ignore
import i1Img from "../assets/img/group-workshop/c1.png";
// @ts-ignore
import i2Img from "../assets/img/group-workshop/c2.png";
// @ts-ignore
import i3Img from "../assets/img/group-workshop/c3.png";
// @ts-ignore
import i4Img from "../assets/img/group-workshop/c4.png";
import Faq from "../sections/Faq";
// @ts-ignore
import Layout from "../layouts";
const GroupWorkshop = () => {
  return (
    <>
      <Layout>
      {/*section*/}
      <div className="section bg-warm">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="lg:w-1/2 flex flex-col items-start justify-center">
            <h1 className="leading-[1.3] mb-8">Group workshops</h1>

            <ul className="flex flex-col gap-3 pl-0 ">
              <span className="font-semibold mb-5">
                Tailor made group workshops
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
                Strengthen your leaders relationships and the company's culture
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
                Reinforce cohesion, collaboration and productivity
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
                Build a common managerial culture
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
                Use collective intelligence
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
                Bring purpose
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
                Resolve conflicts
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img style={{ maxWidth: "100%" }} src={heroImg} />
          </div>
        </div>
      </div>

      {/*Section*/}
      <div className="section bg-white">
        <h2 className="text-center mb-8">Case-studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <IconCard
            icon={i1Img}
            header={"DISC"}
            color="bg-green-light"
            des="Qonto gives the opportunity for each team to do a DISC assessment during offsites to improve communication."
          />
          <IconCard
            icon={i2Img}
            header={"Public speaking"}
            color="bg-warm-dark"
            des="Virtuo is working with Coachello for all Public Speaking workshops in French and English to empower every Talent."
          />
          <IconCard
            icon={i3Img}
            header={"Management training"}
            color="bg-green-light"
            des="Amplitude Studios trained all their managers with Coachello's 'manager of the future' workshop to create a common managerial culture"
          />
          <IconCard
            icon={i4Img}
            header={"Co-development"}
            color="bg-warm-dark"
            des="Qonto is training their People Business Partner to the co-development methodology to scale co-development within the company"
          />
        </div>
      </div>
      <Faq />
      </Layout>
    </>
  );
};

export default GroupWorkshop;
