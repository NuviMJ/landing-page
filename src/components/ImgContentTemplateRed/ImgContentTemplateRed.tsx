import React from 'react';

interface Props {
    img: any;
    redTitle: string;
    titleE: any;
    desE: any;
}

import './ImgContentTemplateRed.scss'

const ImgContentTemplateRed = (prop: Props) => {
    return (
        <div className="ImgContentTemplateRed">
            <div>
                <div className="ImgContentTemplateRed-contentContainer">
                    <div><p  className="h1-red">{prop.redTitle}</p>
                        {prop.titleE}
                        {prop.desE}
                    </div>
                </div>
                <div className="ImgContentTemplateRed-imgContainer">
                    <img src={prop.img}/>
                </div>
            </div>
        </div>
    );
};

export default ImgContentTemplateRed;
