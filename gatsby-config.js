module.exports = {
  siteMetadata: {
    siteUrl: "https://www.dhia.dev",
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
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "DhiaDev",
        short_name: "DhiaDev",
        start_url: "/",
        background_color: "#F2F1E7",
        theme_color: "#14971F",
        display: "standalone",
        icon: "static/favicon.png"
      }
    }
  ],
};
