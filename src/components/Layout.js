import * as React from "react"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import "@fontsource/nunito"

const Layout = ({children}) => {
  return(
        <div>
            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </div>
  )
}

export default Layout
