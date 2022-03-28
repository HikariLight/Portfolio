import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout.js"
import "../style/global.css"

const NotFoundPage = () => {
  return (
    <Layout>

      <Helmet>
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
