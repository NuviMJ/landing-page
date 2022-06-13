import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Coachello`,
        siteUrl: `https://coachello.io`
    },
    plugins: [
        // used to generate rewrites for client only paths
        // on demo hosted on Netlify
        "gatsby-plugin-netlify",
        "gatsby-plugin-sass",
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
        }]

};

export default config;
