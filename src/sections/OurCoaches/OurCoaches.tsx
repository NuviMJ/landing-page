import React from 'react';
import './OurCoaches.scss'
// @ts-ignore
import ICFLogo from '../../assets/img/ourCoaches/icf.svg'
// @ts-ignore
import EMCCLogo from '../../assets/img/ourCoaches/emcc.svg'
// @ts-ignore
import coach1 from '../../assets/img/ourCoaches/coach1.svg'
// @ts-ignore
import coach2 from '../../assets/img/ourCoaches/coach(1).png'
// @ts-ignore
import coach3 from '../../assets/img/ourCoaches/coach3.svg'

const OurCoaches = () => {
    return (
        <div className="OurCoaches">
            <div className="OurCoaches-wrapper">
                <div className="OurCoaches-headerContainer">
                    <p className="h1-red">Our Coaches</p>
                    <h2>Global reach, local touch</h2>
                </div>
                <p>Are amazing. They are all certified by the ICF and possess over 500 hours of coaching experience.
                    They are well-travelled individuals which can lean on rich careers. We continuously monitor their
                    performance so that we can guarantee you an excellent quality. They can help your talents on any
                    topic ranging from burn-out prevention, public speaking to management and leadership. Oh yes, your
                    talents always choose their coach based on their personality.</p>
                <div className="OurCoaches-logoContainer">
                    <img src={ICFLogo}/>
                    <img src={EMCCLogo}/>
                </div>
                <div className="OurCoaches-imgContainer">
                    <img  src={coach1}/>
                    <img style={{height:"344px"}} src={coach2}/>
                    <img src={coach3}/>
                </div>

            </div>
        </div>
    );
};

export default OurCoaches;
