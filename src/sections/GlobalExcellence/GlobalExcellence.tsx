import React from 'react';

import './GlobalExcellence.scss'
// @ts-ignore
import ExcellenceImg from '../../assets/img/excellence.png'
import ReactPlayer from "react-player";


const GlobalExcellence = () => {
    return (
        <div className="GlobalExcellence">
            <div>
                <div className="GlobalExcellence-contentContainer">
                    <div><p className="h1-red">Global Excellence</p>
                        <h2>Your team is global?<br/>
                            So is ours.</h2>
                        <p>Global Excellence - is what we require from our coaches. We determine their excellence by a
                            two-step interview process, reference checks, assessments, and by monitoring their
                            performance we can guarantee the coaching quality to all stakeholders.</p>
                    </div>
                </div>
                <div className="GlobalExcellence-imgContainer">

                    <ReactPlayer
                        style={{marginTop: "20px"}}
                        controls={true}
                        playing
                        muted={true}
                        url={"https://www.youtube.com/watch?v=hQxr6Ac_H6E"}
                    />


                    {/*<img id="icon1" src={ExcellenceImg}/>*/}


                </div>
            </div>
        </div>
    );
};

export default GlobalExcellence;
