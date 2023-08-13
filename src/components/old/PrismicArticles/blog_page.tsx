import React from "react";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import "./PrismicArticles.scss";
import moment from "moment";
interface Props {
  blog: any;
}
const BlogPage = ({ blog }: Props) => {
  const doc = blog?.dataRaw;

  return (
    <div className="PrismicArticles">
      <p>
        Published {moment(blog?.date_of_publication).format("MMMM d, YYYY")}
      </p>
      <p>
        Estimated read time:{" "}
        <b>
          {doc.read_time ? <PrismicText field={doc.read_time} /> : "5 minutes"}
        </b>
      </p>
      <hr />
      <PrismicRichText field={doc.title} />

      <img
        className="PrismicArticles-heroImg"
        src={blog?.data?.image?.url}
        alt={blog?.data?.image.alt}
      />

      <PrismicRichText field={doc.text} />
    </div>
  );
};

export default BlogPage;
