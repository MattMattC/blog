// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-components-browse-blog-posts-js": () => import("/home/mattmatt/dev/gatsby-site/src/components/browse-blog-posts.js" /* webpackChunkName: "component---src-components-browse-blog-posts-js" */),
  "component---cache-dev-404-page-js": () => import("/home/mattmatt/dev/gatsby-site/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/mattmatt/dev/gatsby-site/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-index-js": () => import("/home/mattmatt/dev/gatsby-site/src/pages/blog/index.js" /* webpackChunkName: "component---src-pages-blog-index-js" */),
  "component---src-pages-index-js": () => import("/home/mattmatt/dev/gatsby-site/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/home/mattmatt/dev/gatsby-site/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-blog-test-mdx": () => import("/home/mattmatt/dev/gatsby-site/src/pages/blog/test.mdx" /* webpackChunkName: "component---src-pages-blog-test-mdx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/mattmatt/dev/gatsby-site/.cache/data.json")

