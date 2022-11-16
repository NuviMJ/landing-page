import React, { useEffect, useState } from "react";
import BlogPage from "../../components/PrismicArticles/blog_page";
import Navbar from "../../sections/Navbar/Navbar";
import { PrismicProvider, usePrismicDocumentByUID } from "@prismicio/react";
import { client } from "../../utils/prismic";
import Footer from "../../sections/Footer/Footer";
import { navigate } from "gatsby-link";
import Seo from "../../utils/seo";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  const blog = data?.prismicBlogPage?.dataRaw;

  return (
    <>
      <Navbar />
      {/*<Article {...blog} />*/}
      <Seo
        title={blog?.seo_title?.[0]?.text || "Coachello"}
        description={blog.seo_description?.[0].text || "Coachello"}
      />
      <BlogPage doc={blog} />
      <Footer />
    </>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPost($id: String) {
    prismicBlogPage(id: { eq: $id }) {
      uid
      id
      url
      dataRaw
    }
  }
`;
