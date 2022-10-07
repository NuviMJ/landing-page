import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {

    siteMetadata: {
        title: `Coachello`,
        description: "Online Professional Coaching Platform",
        author: `@coachello`,
        url: `https://coachello.io`,
        image: "https://i.ibb.co/bKD9Q9P/SEO.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    },
    plugins: [
        // used to generate rewrites for client only paths
        // on demo hosted on Netlify
        "gatsby-plugin-netlify",
        "gatsby-plugin-sass",
        'gatsby-plugin-postcss',
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Coachello',
                short_name: 'coachello',
                start_url: '/',
                background_color: '#f7f0eb',
                theme_color: '#a2466c',
                display: 'standalone',
                icon: 'src/assets/img/coachello.svg',
            },
        }   , {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-189610898-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                // exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "coachello.io",
                // defaults to false
                enableWebVitalsTracking: true,
            },
        },]

};

export default config;
