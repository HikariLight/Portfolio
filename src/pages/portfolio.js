import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout.js"
import ProjectCard from "../components/ProjectCard.js"
import "../style/global.css"

const PortfolioPage = () => {
  return (
    <Layout>

      <Helmet>
        <title>Dhia | Portfolio</title>  
      </Helmet>

      <div className="gridContainer">
        <ProjectCard name="Briefer" description="Open source browser extension that assists with doing research by simplifying, summarising, and fusing web pages." tech="Javascript (mostly), HTML, CSS." link="https://github.com/HikariLight/Briefer" tryLink="https://briefer.netlify.app" imgLink="briefer.png"></ProjectCard>  
        <ProjectCard name="KeyboardAuth" description="React app for authenticating users using Keyboard Dynamics" tech="React JS" link="https://github.com/HikariLight/KeyboardAuth" tryLink="https://keyboardauth.netlify.app" imgLink="KeyAuth.png"></ProjectCard>
        <ProjectCard name="HTR" description="Machine learning model for handwritten text recognition" tech="Python, Tensorflow" link="https://github.com/HikariLight/HTR" imgLink="HTR.png"></ProjectCard>
        <ProjectCard name="Story" description="A dynamic website for sharing short stories and jokes" tech="PHP, PostgreSQL" link="https://github.com/HikariLight/Story" tryLink="https://story-hikarilight.herokuapp.com/" imgLink="story.png"></ProjectCard>
      </div>
    </Layout>
  )
}

export default PortfolioPage
