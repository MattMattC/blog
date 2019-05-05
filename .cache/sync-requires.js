const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-browse-blog-posts-js": hot(preferDefault(require("/home/mattmatt/dev/gatsby-site/src/components/browse-blog-posts.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/mattmatt/dev/gatsby-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/mattmatt/dev/gatsby-site/src/pages/404.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("/home/mattmatt/dev/gatsby-site/src/pages/blog/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/mattmatt/dev/gatsby-site/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/mattmatt/dev/gatsby-site/src/pages/page-2.js"))),
  "component---src-pages-blog-test-mdx": hot(preferDefault(require("/home/mattmatt/dev/gatsby-site/src/pages/blog/test.mdx")))
}

