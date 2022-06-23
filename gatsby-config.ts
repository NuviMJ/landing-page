import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {

    siteMetadata: {
        title: `Coachello`,
        description: "Online Professional Coaching Platform",
        author: `@coachello`,
        url: `https://coachello.io`,
        image: "https://ibb.co/DRT2z2t", // Path to the image placed in the 'static' folder, in the project's root directory.
    },
    plugins: [
        // used to generate rewrites for client only paths
        // on demo hosted on Netlify
        "gatsby-plugin-netlify",
        "gatsby-plugin-sass",
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
        }]

};

export default config;
