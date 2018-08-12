module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-107709228-2",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Bryan Monsalvatge',
    description: 'DevOps Engineer',
    keywords: 'devops, dev ops, system administrator, aws, developer, engineer, full stack, portfolio, personal website',
    url: 'https://www.bryanmonsalvatge.com'
  }
};
