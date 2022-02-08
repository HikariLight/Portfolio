module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "light-dev",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Nunito"],
        display: "swap"
      }
    }
  ],
};
