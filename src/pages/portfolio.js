import * as React from "react"
import Layout from "../components/Layout.js"
import ProjectCard from "../components/ProjectCard.js"
import "../style/global.css"

const PortfolioPage = () => {
  return (
    <Layout>
      <title>Light | Portfolio</title>
      <div className="gridContainer">
        <ProjectCard name="ClearView" description="Chrome Extension that summarises and simplfies web pages" tech="HTML, CSS and JS" link="#"></ProjectCard>
        <ProjectCard name="KeyboardAuth" description="Authenticating users using Keyboard Dynamics" tech="React JS" link="https://github.com/HikariLight/KeyboardAuth"></ProjectCard>
        <ProjectCard name="Story" description="A website for sharing short storiers and jokes" tech="PHP" link="https://github.com/HikariLight/Story"></ProjectCard>
        <ProjectCard name="HTR" description="Handwritten text recognition" tech="Python" link="#"></ProjectCard>
      </div>
    </Layout>
  )
}

export default PortfolioPage
