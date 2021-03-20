require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = 'https://huntersoftware.dev',
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV,
  } = process.env
  const isNetlifyProduction = NETLIFY_ENV === 'production'
  const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
  module.exports = {
    siteMetadata: {
      siteUrl,
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          resolveEnv: () => NETLIFY_ENV,
          env: {
            production: {
              policy: [{ userAgent: '*' }],
            },
            'branch-deploy': {
              policy: [{ userAgent: '*', disallow: ['/'] }],
              sitemap: null,
              host: null,
            },
            'deploy-preview': {
              policy: [{ userAgent: '*', disallow: ['/'] }],
              sitemap: null,
              host: null,
            },
          },
        },
      },
    ],
  }

module.exports = {
    siteMetadata: {
        title: "huntersoftwaredevelopment",
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
        `gatsby-plugin-offline`,
        `gatsby-plugin-advanced-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-robots-txt`,
    ],
};
