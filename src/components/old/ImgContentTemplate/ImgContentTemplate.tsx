import React from "react";
interface Props {
  img: any;
  imgText?: any;
  title: string;
  des: any;
}
import "./ImgContentTemplate.scss";
const ImgContentTemplate = (prop: Props) => {
  return (
    <div className="ImgContentTemplate">
      <div>
        <div className="ImgContentTemplate-contentContainer">
          <h1>{prop.title}</h1>
          {prop.des}
        </div>
        <div className="ImgContentTemplate-imgContainer">
          <img src={prop.img} />
        </div>
      </div>
    </div>
  );
};

export default ImgContentTemplate;
