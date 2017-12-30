module.exports = {
  pathPrefix: '/diskold.github.io',
  plugins: ['gatsby-plugin-react-helmet',
    /* other plugins */
    {
      resolve: 'gatsby-plugin-github-pages',
      options: {
        publishOptions: {
          /* ... */
        }
      }
    }
  ]
}