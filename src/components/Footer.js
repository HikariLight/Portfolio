import * as React from "react"

const Footer = () => {
  return (
    <footer className="gridContainer">
        <p><span className="greenText">E-mail: </span><a href="mailto: merzougui.dhia@gmail.com">merzougui.dhia@gmail.com</a></p>
        <div>
          <a href="https://github.com/HikariLight"><img className="icon" src="github.svg" alt="github icon"></img></a>
          <a href="https://www.linkedin.com/in/dhia-eddine-merzougui-a5ba621b7/"><img className="icon" src="linkedin.svg" alt="LinkedIn icon"></img></a>
        </div>
    </footer>
  )
}

export default Footer
