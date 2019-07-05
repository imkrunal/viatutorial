const config = require('./config/website')

module.exports = {
  siteMetadata: {
    siteTitle: config.siteTitle,
    siteDescription: config.siteDescription,
    siteShortName: config.siteShortName,
    siteUrl: config.siteUrl,
    twitter: config.twitter,
    facebook: config.facebook,
  },
  mapping: {
    'Mdx.frontmatter.author': `AuthorYaml`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          { resolve: `gatsby-remark-copy-linked-files` },
          // { resplve: `gatsby-remark-code-titles` },
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: '#fafafa',
              maxWidth: 1035,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
  ],
}
