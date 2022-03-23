import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout.js"
import ProjectCard from "../components/ProjectCard.js"
import "../style/global.css"

const PortfolioPage = () => {
  return (
    <Layout>

      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="author" content="Dhia Merzougui"/>
        <meta name="keywords" content="software developer, software engineer, web developer, programmer"/>
        <meta name="description" content="Software engineer's portfolio website"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        <title>Dhia | Portfolio</title>  
      </Helmet>

      <div className="gridContainer">
        <ProjectCard name="Briefer" description="Chrome Extension that assists people with research by simplifying, summarising, and fusing web pages." tech="HTML, CSS and JS" link="https://github.com/HikariLight/Briefer" tryLink="https://briefer.netlify.app" imgLink="briefer.png"></ProjectCard>  
        <ProjectCard name="KeyboardAuth" description="Demo website for authenticating users using Keyboard Dynamics" tech="React JS" link="https://github.com/HikariLight/KeyboardAuth" tryLink="https://keyboardauth.netlify.app" imgLink="KeyAuth.png"></ProjectCard>
        <ProjectCard name="HTR" description="Desktop app for handwritten text recognition" tech="Python" link="https://github.com/HikariLight/HTR" imgLink="HTR.png"></ProjectCard>
        <ProjectCard name="Story" description="A website for sharing short storiers and jokes" tech="PHP" link="https://github.com/HikariLight/Story" tryLink="https://story-hikarilight.herokuapp.com/" imgLink="story.png"></ProjectCard>
      </div>
    </Layout>
  )
}

export default PortfolioPage
