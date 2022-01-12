import * as React from "react"
import Layout from "../components/Layout.js"
import "../style/global.css"
import {contactCard} from "../style/contact.module.css"

const ContactPage = () => {
  return (
    <Layout>
      <section className = {contactCard}>
        <h1 className="greenText">My Card</h1>
        <ul>
          <li><a href = "mailto: merzougui.dhia@gmail.com">merzougui.dhia@gmail.com</a></li>
          <li><a href="https://github.com/HikariLight">Github</a></li>
          <li><a href="https://www.linkedin.com/in/dhia-eddine-merzougui-a5ba621b7/">LinkedIn</a></li>
        </ul>
      </section>
    </Layout>
  )
}

export default ContactPage
