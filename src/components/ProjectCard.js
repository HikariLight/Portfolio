import * as React from "react"
import {card, content} from "../style/ProjectCard.module.css"

const ProjectCard = ({name, description, tech, link}) => {
  return (
        <section className = {card}>
            <h1 className="greenText">{name}</h1>
            <ul className = {content}>
                <li><span className = "greenText signedText">Description:</span> {description}</li>
                <li><span className = "greenText signedText">Technologies Used:</span> {tech}</li>
            </ul>
            <a className="greenText" href = {link}>Link</a>
        </section>
  )
}

export default ProjectCard
