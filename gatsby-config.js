module.exports = {
    siteMetadata: {
        title: `MattMatt blog`,
        description: `Un petit site pour partager mes connaissances et ma vie !.`,
        author: `@gatsbyjs`,
    },
    plugins: [
         {
            resolve: `gatsby-mdx`,
            options: {
                // Apply gatsby-mdx to both .mdx and .md files
                extensions: ['.mdx', '.md'],
                defaultLayouts: {
                    default: require.resolve("./src/components/blog-post-layout.js")
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/pages/blog`,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
            },
        },
    ],
}
