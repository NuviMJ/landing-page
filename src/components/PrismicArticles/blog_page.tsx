import React from 'react';
import * as prismicH from '@prismicio/helpers'
import { PrismicRichText,PrismicText } from '@prismicio/react'
import './PrismicArticles.scss'
import moment from "moment";
interface Props {
    doc:any;
}
const BlogPage = ({doc}: Props) => {
    console.log(doc)
    const src = prismicH.asImageSrc(doc.data.image)
    return (
        <div className="PrismicArticles">
            <p>Published {moment(doc.data.date_of_publication).format('MMMM d, YYYY')}</p>
            <p>Estimated read time:  <b>{doc.data.read_time?<PrismicText field={doc.data.read_time}/>: "5 minutes"}</b></p>
            <hr/>
            <PrismicRichText field={doc.data.title} />

            <img className="PrismicArticles-heroImg"  src={src!} alt={doc.data.image.alt} />

            <PrismicRichText field={doc.data.text} />
        </div>
    );

};

export default BlogPage;
