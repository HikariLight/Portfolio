import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout.js"
import "../style/global.css"
import {personalCard} from "../style/IndexPage.module.css"

const IndexPage = () => {
  return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8"/>
          <meta name="author" content="Dhia Merzougui"/>
          <meta name="keywords" content="software developer, software engineer, web developer, programmer"/>
          <meta name="description" content="Software engineer's portfolio website"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
          <title>Dhia | Home</title>  
        </Helmet>
        
        <div className="gridContainer">
          <section className= {personalCard}>
            <h1 className="greenText">Hello!</h1>
            <p>My name is <span className="greenText">Dhia</span>. I’m a software developer!</p>
            <button className="greenButton"><a href="CV.pdf" download>My CV</a></button>
          </section>

          <section>
            <img className="selfies" src="Me.jpg" alt="Me"></img>
          </section>
        </div>
      </Layout>
  )
}

export default IndexPage
