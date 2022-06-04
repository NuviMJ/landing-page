import React from 'react';

// @ts-ignore
import macImg from '../../assets/img/MacBook Air.png'
import './Measure.scss'

const Measure = () => {
    return (
        <div className="Measure">
            <div>
                <div className="Measure-contentContainer">
                    <div><p  className="h1-red">Aliquam scelerisquep</p>
                       <h2>Measure is to know
                           the unknown struggles inside your company and measure performance right from the start.</h2>

                    </div>
                </div>
                <div className="Measure-imgContainer">
                    <img src={macImg}/>
                </div>
            </div>
        </div>
    );
};

export default Measure;
