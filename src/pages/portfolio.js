import * as React from "react"
import Layout from "../components/Layout.js"
import ProjectCard from "../components/ProjectCard.js"
import "../style/global.css"

const PortfolioPage = () => {
  return (
    <Layout>
      <title>Light | Portfolio</title>
      <div className="gridContainer">
        <ProjectCard name="KeyboardAuth" description="Authenticating users using Keyboard Dynamics" tech="React JS" link="https://github.com/HikariLight/KeyboardAuth" tryLink="https://frosty-yalow-9c19d4.netlify.app/"></ProjectCard>
        <ProjectCard name="HTR" description="Handwritten text recognition" tech="Python" link="https://github.com/HikariLight/HTR"></ProjectCard>
        <ProjectCard name="ClearView" description="Chrome Extension that summarises and simplfies web pages" tech="HTML, CSS and JS" link="#"></ProjectCard>  
        <ProjectCard name="Story" description="A website for sharing short storiers and jokes" tech="PHP" link="https://github.com/HikariLight/Story" tryLink="https://story-hikarilight.herokuapp.com/"></ProjectCard>
        
      </div>
    </Layout>
  )
}

export default PortfolioPage
