import * as React from "react"
import Layout from "../components/Layout.js"
import ProjectCard from "../components/ProjectCard.js"
import "../style/global.css"

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="gridContainer">
        <ProjectCard name="ClearView" description="Chrome Extension that summarises and simplfies web pages" tech="HTML, CSS and JS" link="www.google.com"></ProjectCard>
        <ProjectCard name="KeyboardAuth" description="Authenticating users using Keyboard Dynamics" tech="React JS" link="www.google.com"></ProjectCard>
        <ProjectCard name="Story" description="A website for sharing short storiers and jokes" tech="PHP" link="www.google.com"></ProjectCard>
        <ProjectCard name="HTR" description="Handwritten text recognition" tech="Python" link="www.google.com"></ProjectCard>
      </div>
    </Layout>
  )
}

export default PortfolioPage
