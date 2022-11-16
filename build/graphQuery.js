const query = `
    {
      allPrismicBlogPage {
        nodes {
          id
          uid
          url
        }
      }
    }`;

module.exports = query;
