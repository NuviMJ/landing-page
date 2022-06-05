import React from 'react';

import './ThoughtLeadership.scss'
// @ts-ignore
import searchIcon from '../../assets/img/icons/search.svg'
import Input from "../../components/Input/Input";

import Accordion from "../../components/Accordion/Accordion";
import {ThoughtCardsData} from "../../constant/ThoughtCardsData";
import ThoughtCard from "../../components/ThoughtCard/ThoughtCard";


const ThoughtLeadership = () => {
    return (
        <div className="ThoughtLeadership">
            <div>
                <div className="ThoughtLeadership-contentContainer">
                    <div>
                        <p className="h1-red">The future of coaching</p>
                        <h2>Thought Leadership</h2>
                    </div>
                </div>
                <div className="ThoughtLeadership-inputContainer">
                    <Input placeHolder="Search" name="search" icon={searchIcon}/>
                    <Input placeHolder="Newest to oldest" name="new" icon={searchIcon}/>
                    <Input placeHolder="Subject" name="sub" icon={searchIcon}/>
                </div>
                <div className="ThoughtLeadership-cardContainer">
                    {ThoughtCardsData.map(({icon, url, title, thumb, company, date}) => (
                        <div>
                            <ThoughtCard url={url} thumb={thumb} title={title}
                                         icon={icon} company={company}
                                         date={date}
                            />
                        </div>
                    ))}

                </div>
                <div className="ThoughtLeadership-buttonContainer">
                    <button className="ThoughtLeadership-button">Lean More</button>
                </div>
            </div>
        </div>
    );
};

export default ThoughtLeadership;
