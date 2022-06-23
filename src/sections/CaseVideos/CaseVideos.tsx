import React from 'react';
import './CaseVideos.scss'

// @ts-ignore
import adelineThumb from "../../assets/img/thumbnails/adeline.png";
// @ts-ignore
import thomasThumb from "../../assets/img/thumbnails/thomas.png";
// @ts-ignore
import jordanThumb from "../../assets/img/thumbnails/jordan.png";

import ProfileVideoCard from "../../components/ProfileVideoCard/ProfileVideoCard";

const CaseVideos = () => {
    return (
        <div className="CaseVideos">
            <div>
                <div>
                    <ProfileVideoCard
                        url="https://res.cloudinary.com/coachello-dev/video/upload/v1654020755/landing-page/Adeline_qnl7tq.mp4"
                        thumb={adelineThumb}
                        name="Adeline"
                        position="Head of People Gorgias"
                        des={<ul>
                            <li>Scope: Global</li>
                            <li>Talents: All & full remote</li>
                            <li>Languages: 10+</li>
                        </ul>
                        }
                        flag="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/>
                </div>
                <div>
                    <ProfileVideoCard url="https://res.cloudinary.com/coachello-dev/video/upload/v1654020751/landing-page/thomas_iid0wm.mp4"
                                      thumb={thomasThumb}
                                      name="Thomas"
                                      position="CEO Lefty"
                                      des={<ul>
                                          <li>Scope: Global</li>
                                          <li>Talents: All & full remote</li>
                                          <li>Languages: 4</li>
                                      </ul>
                                      }
                                      flag="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"/>
                </div>

                <div>
                    <ProfileVideoCard url="https://res.cloudinary.com/coachello-dev/video/upload/v1654020734/landing-page/jordan_gxruww.mp4"
                                      thumb={jordanThumb}
                                      name="Jordan"
                                      position="CMO Germinal"
                                      des={<ul>
                                          <li>Scope: Global</li>
                                          <li>Talents: All & full remote</li>
                                          <li>Languages: 2</li>
                                      </ul>
                                      }
                                      flag="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"/>
                </div>
            </div>
        </div>


    )
        ;
};

export default CaseVideos;
