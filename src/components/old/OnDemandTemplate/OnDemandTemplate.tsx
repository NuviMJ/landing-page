import React from "react";

interface Props {
  img: any;
  redTitle: string;
  titleE: any;
  desE?: any;
}

import "./OnDemandTemplate.scss";

const OnDemandTemplate = (prop: Props) => {
  return (
    <div className="OnDemandTemplate">
      <div>
        <div className="OnDemandTemplate-contentContainer">
          <div>
            <p className="h1-red">{prop.redTitle}</p>
            {prop.titleE}
            {prop.desE}
          </div>
        </div>
        <div className="OnDemandTemplate-imgContainer flex items-center">
          <img src={prop.img} />
        </div>
      </div>
    </div>
  );
};

export default OnDemandTemplate;
