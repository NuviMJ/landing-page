import React, { useEffect, useState } from "react";
import BlogPage from "../../components/old/PrismicArticles/blog_page";
import Navbar from "../../sections/Navbar/Navbar";
import Footer from "../../sections/Footer";
import Seo from "../../utils/seo";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  const blog = data?.prismicBlogPage;

  return (
    <>
      <Navbar />
      {/*<Article {...blog} />*/}
      <Seo
        title={blog?.dataRaw?.seo_title?.[0]?.text || "Coachello"}
        description={blog?.dataRaw?.seo_description?.[0]?.text || "Coachello"}
      />
      <BlogPage blog={blog} />
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
      data {
        image {
          url(imgixParams: { width: 1920, q: 100 })
        }
      }
    }
  }
`;
