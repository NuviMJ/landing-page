/**
 * This is the old file used to create the blog pages
 * _ will exclude this file when creating pages.
 */


import React, {useEffect, useState} from "react"
import BlogPage from "../../components/PrismicArticles/blog_page";
import Navbar from "../../sections/Navbar/Navbar";
import {PrismicProvider, usePrismicDocumentByUID} from "@prismicio/react";
import {client} from "../../utils/prismic";
import Footer from "../../sections/Footer/Footer";
import {navigate} from "gatsby-link";
import Seo from "../../utils/seo";


const Article = (prop) => {
    console.log(prop.params)
    const [doc, setDoc] = useState(prop.location.state);
    const [docP, {state}] = usePrismicDocumentByUID('blog_page', prop.params.name)
    let title = "Coachello"
    let description = "Coaching on demand"
    useEffect(() => {
        if (docP) {
            setDoc(docP);
        } else if (!doc && !docP && state === 'failed') {
            navigate('/404');
        }

    }, [docP, state])

    useEffect(() => {

        // console.log(doc.data);
        if (doc?.data.seo_title.length > 0) {
            title = doc.data.seo_title[0].text
        }
        if (doc?.data.seo_description.length > 0) {
            description = doc.data.seo_description[0].text
        }
    }, [doc])


    return <>{
        doc ? ((doc.type === "blog_page") ?
            <><Seo title={title}
                   description={description}/>
                <BlogPage doc={doc}/></>

            : <div>
                Article type not is defined!
            </div>) : ((state === 'loaded') ? null : <p>Loading...</p>)
    }

    </>


}

const ArticlesPage = (props) => {
    // const [doc, setDoc] = useState(prop.location.state);
    // console.log(doc.data.seo_title)
    // console.log(props)
    return (
        <>


            <Navbar/>
            <PrismicProvider client={client}>
                <Article {...props} />
            </PrismicProvider>
            <Footer/>

        </>
    )
}

export default ArticlesPage
