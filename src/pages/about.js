import * as React from "react"
import Layout from "../components/Layout.js"
import "../style/global.css"
import {aboutCard} from "../style/about.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <title>LightDev | About Me</title>
      <div className="gridContainer">
        <section>
          <img className="selfies" src="MeAtUni.jpg" alt="Me at University"></img>
        </section>

        <section className = {aboutCard}>
          <h1 className="greenText">Education</h1>
            <ul>
              <li>
                * Bachelor's Degree in Computer Science <br></br>
                University of Caen Normandie<br></br>
                2018 - 2022
              </li>
              <li>
                * Baccalaureate of Science.<br></br>
                2017<br></br>
                High Honors.
              </li>
            </ul>
        </section>

        <section className = {aboutCard}>
          <h1 className="greenText">About Me</h1>
          <p>I'm a Geek at heart.</p>
        </section>

        <section className = {aboutCard}>
        <h1 className="greenText">Skills</h1>
          <ul>
            <li>Programming Languages: C, Java, Python, PHP, HTML, CSS, Javascript</li>
            <li>Frameworks: Tensorflow, Django, Node JS, React JS, Vue JS, Gatsby</li>
            <li>Good understanding of Algorithms</li>
            <li>Tools: Adobe XD</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage
