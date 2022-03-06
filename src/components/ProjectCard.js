import * as React from "react"
import {card, container, content, imgContainer, screenshot, links} from "../style/ProjectCard.module.css"

const ProjectCard = ({name, description, tech, link, tryLink, imgLink}) => {
  return (
        <section className = {card}>

          <div className = {container}>
            <article id={imgContainer}>
              <img id = {screenshot} src = {imgLink} alt="screenshot"></img>
            </article>

            <article>
              <h1 className="greenText">{name}</h1>
              <ul className = {content}>
                  <li><span className = "greenText underlinedText">Description:</span> {description}</li>
                  <li><span className = "greenText underlinedText">Technologies Used:</span> {tech}</li>
              </ul>
            </article>
          </div>

          <div id = {links}>
            { link && <a className="greenText" href = {link}>Code</a>}
            { tryLink && <a className="greenText" href = {tryLink}>Try it!</a>}
          </div>
            
        </section>
  )
}

export default ProjectCard
