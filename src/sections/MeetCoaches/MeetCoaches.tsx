import React from "react";
import "./MeetCoaches.scss";
// @ts-ignore
import amelieImg from "../../assets/img/coaches/amelie.png";
// @ts-ignore
import joffImg from "../../assets/img/coaches/joff.png";
// @ts-ignore
import olivImg from "../../assets/img/coaches/olivier.png";
// @ts-ignore
import camImg from "../../assets/img/coaches/amilla.png";
// @ts-ignore
import kristImg from "../../assets/img/coaches/krist.png";

const MeetCoaches = () => {
  return (
    <div className="section bg-white">
      <div className="text-center lg:px-24">
        <div className="">
          <p className="red-heading">Our Coaches</p>
          <h2 className="mt-3 mb-10">Meet some of our amazing coaches</h2>
        </div>
        <p className="mb-10">
          Are amazing. They are all certified by the ICF and possess over 500
          hours of coaching experience. They are well-travelled individuals who
          can lean on rich careers. We continuously monitor their performance so
          that we can guarantee you an excellent quality. They can help your
          talents on any topic ranging from burn-out prevention, public speaking
          to management and leadership. Oh yes, your talents can always choose
          their coach based on their personality.
        </p>

        <div className="MeetCoaches-imgContainer gap-5">
          <div>
            <h4>Amélie</h4>
            <img src={amelieImg} />
          </div>
          <div>
            <h4>Joffrey</h4>
            <img src={joffImg} />
          </div>
          <div>
            <h4>Olivier</h4>
            <img src={olivImg} />
          </div>
          <div>
            <h4>Camilla</h4>
            <img src={camImg} />
          </div>
          <div>
            <h4>Kristelle</h4>
            <img src={kristImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetCoaches;
