const buildPages = require("./build/buildPages");
const graphQuery = require("./build/graphQuery");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryData = await graphql(graphQuery);

  const blogPosts = queryData?.data?.allPrismicBlogPage?.nodes || [];
  buildPages(blogPosts, "src/templates/BlogPost/index.jsx", createPage);
};
