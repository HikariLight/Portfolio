import * as React from "react"
import {card, content} from "../style/ProjectCard.module.css"

const ProjectCard = ({name, description, tech, link, tryLink}) => {
  return (
        <section className = {card}>
            <h1 className="greenText">{name}</h1>
            <ul className = {content}>
                <li><span className = "greenText underlinedText">Description:</span> {description}</li>
                <li><span className = "greenText underlinedText">Technologies Used:</span> {tech}</li>
            </ul>
            
            { link && <a className="greenText" href = {link}>Code</a>}
            { tryLink && <a className="greenText" href = {tryLink}>Try it!</a>}
        </section>
  )
}

export default ProjectCard
