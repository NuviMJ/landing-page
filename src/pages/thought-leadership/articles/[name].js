import React, {useEffect, useState} from "react"
import BlogPage from "../../../components/PrismicArticles/blog_page";
import Navbar from "../../../sections/Navbar/Navbar";
import {PrismicProvider, usePrismicDocumentByUID} from "@prismicio/react";
import {client} from "../../../utils/prismic";
import Footer from "../../../sections/Footer/Footer";
import {navigate} from "gatsby-link";
import Seo from "../../../utils/seo";


const Article = (prop) => {
    console.log(prop.params)
    const [doc, setDoc] = useState(prop.location.state);
    const [docP, {state}] = usePrismicDocumentByUID('blog_page', prop.params.name)

    useEffect(() => {
        if (docP) {
            setDoc(docP);
        } else if (!doc && !docP && state === 'failed') {
            navigate('/404');
        }
    }, [docP, state])

    return <>{
        doc ? ((doc.type === "blog_page") ?
            <BlogPage doc={doc}/>
            : <div>
                Article type not is defined!
            </div>) : ((state === 'loaded') ? null : <p>Loading...</p>)
    }

    </>


}

const ArticlesPage = (props) => {
    const doc =  props.location.state;
    // console.log(doc.data.seo_title)
    // console.log(props)
    return (
        <>
            <Seo title= {doc.data.seo_title[0].text}
               description={doc.data.seo_description[0].text}/>

            <Navbar/>
            <PrismicProvider client={client}>
                <Article {...props} />
            </PrismicProvider>
            <Footer/>

        </>
    )
}

export default ArticlesPage
