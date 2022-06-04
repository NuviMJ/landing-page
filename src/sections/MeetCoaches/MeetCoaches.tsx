import React from 'react';
import './MeetCoaches.scss'
// @ts-ignore
import amelieImg from '../../assets/img/ourCoaches/amelie.svg'
// @ts-ignore
import sandrineImg from '../../assets/img/ourCoaches/sandrine.svg'
// @ts-ignore
import stasImg from '../../assets/img/ourCoaches/stas.svg'
// @ts-ignore
import mirjanaImg from '../../assets/img/ourCoaches/mirjana.svg'
// @ts-ignore
import oliverImg from '../../assets/img/ourCoaches/oliver.svg'

const MeetCoaches = () => {
    return (
        <div className="MeetCoaches">
            <div className="MeetCoaches-wrapper">
                <div className="MeetCoaches-headerContainer">
                    <p className="h1-red">Our Coaches</p>
                    <h2>Meet some of our amazing coaches</h2>
                </div>
                <p>Are amazing. They are all certified by the ICF and possess over 500 hours of coaching experience.
                    They are well-travelled individuals which can lean on rich careers. We continuously monitor their
                    performance so that we can guarantee you an excellent quality. They can help your talents on any
                    topic ranging from burn-out prevention, public speaking to management and leadership. Oh yes, your
                    talents always choose their coach based on their personality.
                </p>

                <div className="MeetCoaches-imgContainer">
                    <div><h4>Amélie</h4><img src="https://i.ibb.co/phq55St/01-Amelie-Papin-Portrait-Photoshoot-Octobre-2019-compressed-Ame-lie-Papin-NEWUX.jpg"/></div>
                    <div><h4>Sandrine</h4><img src="https://i.ibb.co/QnZ6mkp/DSC-4824-bewerkt-Sandrine-Bostyn-NEWUX.jpg"/></div>
                    <div><h4>Stas</h4><img src={"https://i.ibb.co/xDtr19N/stasfinals-face-Stas-Gromin-NEWUX.jpg"}/></div>
                    <div><h4>Mirjana</h4><img src={"https://i.ibb.co/1mDDX8j/NEB03385-Mirjana-Gomilanovic-NEWUX.jpg"}/></div>
                    <div><h4>Olivier</h4><img src={"https://i.ibb.co/QCv1Gw9/O-FRIEDMAN-Olivier-Friedman-Prism-Up-NEWUX.jpg"}/></div>
                </div>

            </div>
        </div>
    );
};

export default MeetCoaches;
