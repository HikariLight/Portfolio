import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout.js"
import "../style/global.css"

const NotFoundPage = () => {
  return (
    <Layout>

      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="author" content="Dhia Merzougui"/>
        <meta name="keywords" content="software developer, software engineer, web developer, programmer"/>
        <meta name="description" content="Software engineer's portfolio website"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        <title>Dhia | 404 Not Found</title>  
      </Helmet>

      <div className="centeredCard">
        <h1>404 Not Found.</h1>
        <p>These aren't the pages you are looking for...</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
