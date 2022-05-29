import React from 'react';
import './Faq.scss'
import {FAQData} from "../../constant/FAQData";
import Accordion from "../../components/Accordion/Accordion";

const Faq = () => {
    return (
        <div className="Faq">
            <div>
                <div className="Faq-headerContainer">
                    <p className="h1-red">FAQs</p>
                    <h2>Questions you might have</h2>
                </div>
                <div className="Faq-contentContainer">

                    {FAQData.map(({title, content}) => (
                        <div><Accordion title={title} content={content}/></div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Faq;
