import * as React from "react"
import Layout from "../components/Layout.js"
import "../style/global.css"
import {aboutCard} from "../style/about.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <title>Light | About Me</title>
      <div className="gridContainer">

      <section className = {aboutCard}>
          <h1 className="greenText centeredText">About Me</h1>
          <p>I'm a Geek at heart. If you can think of anything that's nerdy, whether that's anime, manga, tabletop games like Dungeons and Dragons, then chances are I'm already a fan, haha.</p>
          <p>Currently a final year Computer Science student at the University of Caen Normandie, I have worked on many projects throughout my Academic career. I've had plenty of personal and school experiences that makes me ready to learn as much as I can from any opportunities given to me.</p>
          <p>I am very passionate about computer science, am most interested in Artificial Intelligence and robotics. However what first got me into Computer Science, as well as what I wish to do for the time being, is Web Development.</p>
        </section>

        <section>
          <article className = {aboutCard}>
            <h1 className="greenText centeredText">Education</h1>
              <ul>
                <li>
                  Bachelor's Degree in Computer Science <br></br>
                  University of Caen Normandie<br></br>
                  2018 - 2022
                </li>
                <li>
                  Baccalaureate of Science.<br></br>
                  2017<br></br>
                  High Honors.
                </li>
              </ul>
          </article>

          <article className = {aboutCard}>
          <h1 className="greenText centeredText">Skills</h1>
            <ul>
              <li>Programming Languages: C, Java, Python, PHP, HTML, CSS, Javascript</li>
              <li>Frameworks: Tensorflow, Django, Node JS, React JS, Vue JS, Gatsby</li>
              <li>Good understanding of Algorithms and Data Structures.</li>
              <li>Tools: Git/Github, Docker, Slack, Microsoft Teams, Adobe XD</li>
            </ul>
          </article>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage
