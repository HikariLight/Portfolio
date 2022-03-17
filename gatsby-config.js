module.exports = {
  siteMetadata: {
    siteUrl: "https://www.dhia.dev",
    title: "Dhia Dev",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
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
