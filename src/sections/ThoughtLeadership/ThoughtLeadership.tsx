import React from 'react';

import './ThoughtLeadership.scss'
// @ts-ignore
import searchIcon from '../../assets/img/icons/search.svg'
import Input from "../../components/Input/Input";

import Accordion from "../../components/Accordion/Accordion";
import {ThoughtCardsData} from "../../constant/ThoughtCardsData";
import ThoughtCard from "../../components/ThoughtCard/ThoughtCard";

import {

    useAllPrismicDocumentsByType,

} from '@prismicio/react'
// @ts-ignore
import i1Icon from "../../assets/img/icons/cIcon.svg";
import moment from 'moment';
import {Link} from "gatsby";

const ThoughtLeadership = () => {
    const [pages, {state}] = useAllPrismicDocumentsByType('blog_page')

    return (
        <div className="ThoughtLeadership">
            <div>
                <div>


                </div>
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
                    {state === 'loading' ? (
                        <p>Loading...</p>
                    ) : null}
                    {pages?.map((page: any) => (
                        <div>
                            <Link
                                to={`/thought-leadership/articles/${page.uid}`}
                                state={page}
                            >
                                <ThoughtCard subject={page.data.subject[0]} thumb={page.data.image.url} title={page.data.title[0].text}
                                             icon={i1Icon} company="Coachello"
                                             date={moment(page.last_publication_date).format('MMMM d, YYYY')}/>
                            </Link>
                        </div>
                    ))}

                </div>
                <div className="ThoughtLeadership-buttonContainer">
                    {/*<button className="ThoughtLeadership-button">Lean More</button>*/}
                </div>
            </div>
        </div>
    );
};

export default ThoughtLeadership;
