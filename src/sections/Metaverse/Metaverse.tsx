import React from 'react';
import ImgContentTemplate from "../../components/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import MetaverseImg from "../../assets/img/Metaverse.svg";

const Metaverse = () => {
    return (
        <ImgContentTemplate img={MetaverseImg} title="Metaverse"
                            des={<>
                                <p>
                                    At Coachello we have create Coachello Labs to brings coaching in the metaverse to
                                    your employees.
                                </p><p>
                                And it’s not just a hype, there are plenty of benefits related to coaching in the
                                metaverse, such as:
                            </p>
                                <ul>
                                    <li>
                                        Offer a safe and peaceful space at work in the metaverse
                                    </li>
                                    <li>
                                        Full confidentiality through avatars
                                    </li>
                                    <li>
                                        Immersive coaching experience
                                    </li>
                                </ul>
                                <p>
                                    Beta tests has proven that this immersive coaching experience is extremely effective
                                    for exercises but establish confidentiality quicker between the coach & coachee.
                                </p><p>
                                Interested in bringing the metaverse inside your company? Talk to us today, to start
                                tomorrow!
                            </p>
                            </>
                            }/>


    );
};

export default Metaverse;
