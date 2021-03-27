require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: "huntersoftwaredevelopment",
        siteUrl: "https://huntersoftware.dev",
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
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-netlify-cms`,
    ],
};
