import * as React from "react"
import { Link } from 'gatsby'

const Navbar = () => {
  return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                </ul>
            </nav>
        </header>
  )
}

export default Navbar
