import React from "react";

// @ts-ignore
import ICFLogo from "../assets/img/old/ourCoaches/icf.png";
// @ts-ignore
import EMCCLogo from "../assets/img/old/ourCoaches/emcc.png";
// @ts-ignore
import coach1 from "../assets/img/old/ourCoaches/Lisa.jpg";
// @ts-ignore
import coach2 from "../assets/img/old/ourCoaches/Mete.jpg";
// @ts-ignore
import coach3 from "../assets/img/old/ourCoaches/Brankica.jpg";
import ReactPlayer from "react-player";

const OurCoaches = () => {
  return (
    <div className="section lg:px-32 ">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p className="red-heading">Our Coaches</p>
          <h2>Global reach, local touch</h2>
        </div>
        <p>
          Are amazing. They are all certified by the ICF and possess over 500
          hours of coaching experience. They are well-travelled individuals who
          can lean on rich careers. We continuously monitor their performance so
          that we can guarantee you an excellent quality. They can help your
          talents on any topic ranging from burn-out prevention, public speaking
          to management and leadership. Oh, and yes, your talents can always
          choose their coach based on their personality.
        </p>
        <div className="flex ">
          <img src={ICFLogo} />
          <img src={EMCCLogo} />
        </div>
        <br />
        <div>
          <ReactPlayer
            playing
            muted={true}
            loop={true}
            url="https://www.youtube.com/watch?v=ajLPlTRYTJY"
            width={"540px"}
            height={"300px"}
            // style={{ minHeight: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurCoaches;
