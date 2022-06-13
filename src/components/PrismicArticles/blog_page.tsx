import React from 'react';
import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'
import './PrismicArticles.scss'
interface Props {
    doc:any;
}
const BlogPage = ({doc}: Props) => {
    console.log(doc)
    const src = prismicH.asImageSrc(doc.data.image)
    return (
        <div className="PrismicArticles">
            <PrismicRichText field={doc.data.title} />


            <img className="PrismicArticles-heroImg"  src={src!} alt={doc.data.image.alt} />

            <PrismicRichText field={doc.data.text} />
        </div>
    );

};

export default BlogPage;
