import React from "react"
import { Helmet } from "react-helmet"
import { Header, About, Projects, Footer, Contact } from "../components"

const Break = () => <hr className="break" />

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Rishad Sewnarain | Portfolio</title>
      </Helmet>
      <Header />
      <Break />
      <About />
      <Break />
      <Projects />
      <Break />
      <Contact />
      <Break />
      <Footer />
    </div>
  )
}
