import React, {useEffect, useState} from "react"
import BlogPage from "../../../components/PrismicArticles/blog_page";
import Navbar from "../../../sections/Navbar/Navbar";
import {PrismicProvider, usePrismicDocumentByUID} from "@prismicio/react";
import {client} from "../../../utils/prismic";
import Footer from "../../../sections/Footer/Footer";
import {navigate} from "gatsby-link";


const Article = (prop) => {
    console.log(prop.params)
    const [doc, setDoc] = useState(prop.location.state);
    const [docP, {state}] = usePrismicDocumentByUID('blog_page', prop.params.name)

    useEffect(() => {
        if (docP) {
            setDoc(docP);
        } else if (!doc && !docP && state === 'loaded') {
            navigate('/404');
        }
    }, [docP,doc,state])

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
