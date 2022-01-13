import * as React from "react"
import Layout from "../components/Layout.js"
import "../style/global.css"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="centeredCard">
        <title>LightDev | 404 Not Found</title>
        <h1>404 Not Found.</h1>
        <p>These aren't the pages you are looking for...</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
