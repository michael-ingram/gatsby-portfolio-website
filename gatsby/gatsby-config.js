import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Michael Ingram Full Stack Developer`,
    siteUrl: `https://gatsby.michael-ingram`,
    description: 'Portfolio Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: '3cataqo3',
    //     dataset: 'production',
    //     watchMode: true,
    //     token: process.env.SANITY_TOKEN,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/myScript.js',
      },
    },
  ],
};