import React from "react";
import "./CaseVideos.scss";

// @ts-ignore
import adelineThumb from "../../../assets/img/old/thumbnails/adeline.png";
// @ts-ignore
import thomasThumb from "../../../assets/img/old/thumbnails/thomas.png";
// @ts-ignore
import jordanThumb from "../../../assets/img/old/thumbnails/jordan.png";

import ProfileVideoCard from "../../../components/old/ProfileVideoCard/ProfileVideoCard";

const CaseVideos = () => {
  return (
    <div className="CaseVideos">
      <div>
        <div>
          <ProfileVideoCard
            url="https://d1x3hp8oc8irfp.cloudfront.net/Adeline.mp4"
            thumb={adelineThumb}
            name="Adeline"
            position="Head of People Gorgias"
            des={
              <ul>
                <li>Scope: Global</li>
                <li>Talents: All & full remote</li>
                <li>Languages: 10+</li>
              </ul>
            }
            flag="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
          />
        </div>
        <div>
          <ProfileVideoCard
            url="https://d1x3hp8oc8irfp.cloudfront.net/thomas.mp4"
            thumb={thomasThumb}
            name="Thomas"
            position="CEO Lefty"
            des={
              <ul>
                <li>Scope: Global</li>
                <li>Talents: All & full remote</li>
                <li>Languages: 4</li>
              </ul>
            }
            flag="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
          />
        </div>

        <div>
          <ProfileVideoCard
            url="https://d1x3hp8oc8irfp.cloudfront.net/jordan.mp4"
            thumb={jordanThumb}
            name="Jordan"
            position="CMO Germinal"
            des={
              <ul>
                <li>Scope: Global</li>
                <li>Talents: All & full remote</li>
                <li>Languages: 2</li>
              </ul>
            }
            flag="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseVideos;
