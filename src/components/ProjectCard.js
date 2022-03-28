import * as React from "react"
import {card, container, content, imgContainer, screenshot, links} from "../style/ProjectCard.module.css"

const ProjectCard = ( props ) => {
  return (
        <section className = {card}>

          <div className = {container}>
            <article id={imgContainer}>
              <img id = {screenshot} src = {props.imgLink} alt="screenshot"></img>
            </article>

            <article>
              <h1 className="greenText">{props.name}</h1>
              <ul className = {content}>
                  <li><span className = "greenText underlinedText">Description:</span> {props.description}</li>
                  <li><span className = "greenText underlinedText">Technologies Used:</span> {props.tech}</li>
              </ul>
            </article>
          </div>

          <div id = {links}>
            { props.link && <a className="greenText" href = {props.link}>Code</a>}
            { props.tryLink && <a className="greenText" href = {props.tryLink}>Try it!</a>}
          </div>
            
        </section>
  )
}

export default ProjectCard
