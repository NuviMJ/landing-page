import React from 'react';
import './CoreTeam.scss'

// @ts-ignore
import leonImg from '../../assets/img/team/leon.svg'
// @ts-ignore
import dinalImg from '../../assets/img/team/dinal.svg'
// @ts-ignore
import liviaImg from '../../assets/img/team/livia.svg'
// @ts-ignore
import quentinImg from '../../assets/img/team/quentin.svg'

import TeamCard from "../../components/TeamCard/TeamCard";

const CoreTeam = () => {
    return (
        <div className="CoreTeam">
            <div>
                <div className="CoreTeam-headerContainer">
                    <p className="h1-red">Executive Team</p>
                    <h2>Core team</h2>
                </div>
                <div className="CoreTeam-cardContainer">
                    <div>
                        <TeamCard profileImg={leonImg}
                                  name="Leon Wever"
                                  des="Product"
                        />
                    </div>
                    <div>
                        <TeamCard profileImg={dinalImg}
                                  name="Dinal Kurukulasooriya"
                                  des="Technology"
                        />
                    </div>
                    <div>
                        <TeamCard profileImg={liviaImg}
                                  name="Livia Vilapana"
                                  des="Coaching"
                        />
                    </div>
                    <div>
                        <TeamCard profileImg={quentinImg}
                                  name="Quentin Bouche"
                                  des="Revenue"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoreTeam;
