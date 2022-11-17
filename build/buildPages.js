const path = require("path");

const buildPages = (pages = [], templatePath = "", createPage) => {
  if (
    !pages ||
    pages.length === 0 ||
    !templatePath ||
    typeof createPage !== "function"
  ) {
    console.error("invalid data passed to create page");
    return;
  }
  pages.forEach((page, idx) => {
    console.log("creating page", page.url);
    createPage({
      path: page.url,
      component: path.resolve(templatePath),
      context: {
        id: page.id,
        lang: page.lang,
        uid: page.uid,
      },
    });
  });
};

module.exports = buildPages;
