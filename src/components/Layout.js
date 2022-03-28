import * as React from "react"
import Helmet from "react-helmet"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import "@fontsource/nunito"

const Layout = ({children}) => {
  return(
        <div>

          <Helmet>
            <meta charSet="utf-8"/>
            <meta name="author" content="Dhia Merzougui"/>
            <meta name="keywords" content="software developer, software engineer, web developer, programmer"/>
            <meta name="description" content="Software engineer's portfolio website"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
          </Helmet>

            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </div>
  )
}

export default Layout
