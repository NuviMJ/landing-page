import React from "react";

// @ts-ignore
import macImg from "../../../assets/img/old/MacBook Air.png";
import "./Measure.scss";

const Measure = () => {
  return (
    <div className="Measure">
      <div>
        <div className="Measure-contentContainer">
          <div>
            <p className="h1-red"></p>
            <h2>
              Measure the unknown challenges inside your company and see
              performance right from the start.
            </h2>
          </div>
        </div>
        <div className="Measure-imgContainer">
          <img src={macImg} />
        </div>
      </div>
    </div>
  );
};

export default Measure;
