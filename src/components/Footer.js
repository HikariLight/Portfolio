import * as React from "react"
import"../style/footer.css"

const Footer = () => {
  return (
    <footer>
        <p><span className="greenText">E-mail: </span><a href="mailto: merzougui.dhia@gmail.com">merzougui.dhia@gmail.com</a></p>
        <a href="https://github.com/HikariLight"><img className="icon" src="github.svg" alt="github icon"></img></a>
        <a href="https://www.linkedin.com/in/dhia-eddine-merzougui-a5ba621b7/"><img className="icon" src="linkedin.svg" alt="LinkedIn icon"></img></a>
    </footer>
  )
}

export default Footer
