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
    <div className="MeetCoaches section bg-white">
      <div className="MeetCoaches-wrapper">
        <div className="MeetCoaches-headerContainer">
          <p className="h1-red">Our Coaches</p>
          <h2>Meet some of our amazing coaches</h2>
        </div>
        <p>
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
            <img src="https://i.ibb.co/phq55St/01-Amelie-Papin-Portrait-Photoshoot-Octobre-2019-compressed-Ame-lie-Papin-NEWUX.jpg" />
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
