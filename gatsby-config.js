require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Gatsby Starter Blog`,
        author: {
            name: `Kyle Mathews`,
            summary: `who lives and works in San Francisco building useful things.`,
        },
        description: `A starter blog demonstrating what Gatsby can do.`,
        siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
        social: {
            twitter: `kylemathews`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Hunter Software Development`,
                short_name: `Hunter Software Development`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/images/icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    process.env.GOOGLE_ANALYTICS_TRACKING_ID, // Google Analytics / GA
                ],
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.nodes.map((node) => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                                    custom_elements: [{ "content:encoded": node.html }],
                                });
                            });
                        },
                        query: `
                    {
                      allMarkdownRemark(
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        nodes {
                          excerpt
                          html
                          fields {
                            slug
                          }
                          frontmatter {
                            title
                            date
                          }
                        }
                      }
                    }
                  `,
                        output: "/rss.xml",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 630,
                },
              },
              {
                resolve: `gatsby-remark-responsive-iframe`,
                options: {
                  wrapperStyle: `margin-bottom: 1.0725rem`,
                },
              },
              `gatsby-remark-prismjs`,
              `gatsby-remark-copy-linked-files`,
              `gatsby-remark-smartypants`,
            ],
          },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-advanced-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-netlify-cms`,
    ],
};
