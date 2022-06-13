import React, {useEffect, useState} from "react"
import {Router, Link, Location} from "@reach/router"
import BlogPage from "../../../components/PrismicArticles/blog_page";
import Navbar from "../../../sections/Navbar/Navbar";
import {PrismicProvider, useAllPrismicDocumentsByType, usePrismicDocumentByUID} from "@prismicio/react";
import {client} from "../../../utils/prismic";
import ThoughtLeadership from "../../../sections/ThoughtLeadership/ThoughtLeadership";
import Footer from "../../../sections/Footer/Footer";
import {navigate} from "gatsby-link";


const Article = (prop) => {
    console.log(prop.params)
    const [doc, setDoc] = useState(prop.location.state);
    const [document, {state}] = usePrismicDocumentByUID('blog_page', prop.params.name)

    useEffect(() => {
        if (document) {
            setDoc(document);
        } else if (!doc && !document && state === 'loaded') {
            navigate('/404');
        }
    }, [document])

    return <>{
       doc? ( (doc.type === "blog_page") ?
           <BlogPage doc={doc}/>
           : <div>
               Article type not is defined!
           </div> ) :(( state === 'loaded') ? (
          null
       ) :  <p>Loading...</p>)
    }

    </>


}

const ArticlesPage = (props) => {
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
