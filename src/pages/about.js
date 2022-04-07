import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout.js"
import "../style/global.css"
import {aboutCard, aboutMe, education} from "../style/about.module.css"

const AboutPage = () => {
  return (
    <Layout>

      <Helmet>
        <title>Dhia | About Me</title>  
      </Helmet>

      <div className="gridContainer">

      <section className = {aboutCard} id = {aboutMe}>
          <h1 className="greenText centeredText">About Me</h1>
          <article className="aboutText">
          <p>I recently graduated with a bachelor's degree in Computer Science from the University of Caen Normandie. Throughout my years there, I've worked on many projects that have given me much experience on what it's like to work with a team and develop software on a deadline.</p>
          <p>On a personal level, I'm a geek at heart. If you can think of anything that's nerdy, whether that's anime, manga, tabletop games like Dungeons and Dragons, then chances are I'm already a fan, haha.</p>
          <p>I am very passionate about computer science, and have been since I was little. I'm ready to learn more from any opportunities given to me</p>
          </article>
        </section>

        <section>
          <article className = {aboutCard} id = {education}>
            <h1 className="greenText centeredText">Education</h1>
              <ul>
                <li>
                  <span className="boldText">Bachelor's Degree in Computer Science</span> <br></br>
                  University of Caen Normandie<br></br>
                  2018 - 2022
                </li>
                <li>
                <span className="boldText">Baccalaureate of Science.</span><br></br>
                  2017<br></br>
                  High Honors.
                </li>
              </ul>
          </article>

          <article className = {aboutCard}>
          <h1 className="greenText centeredText">Skills</h1>
            <ul>
              <li><span class="greenText">Programming Languages:</span> HTML, CSS, Javascript, Typescript, Python, C, Java, PHP, SQL, MongoDB, GraphQL.</li>
              <li><span class="greenText">Frameworks:</span> Node, React, Vue, Express, Jest, Gatsby, Electron, Tensorflow, Django.</li>
              <li><span class="greenText">Tools:</span> Git/Github, Docker, Trello, Jira, Adobe XD.</li>
              <li>Good understanding of Algorithms and Data Structures.</li>
              <li>Good understanding and experience with Agile methodologies.</li>
              <li>Good understanding of Linux environments.</li>
            </ul>
          </article>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage
