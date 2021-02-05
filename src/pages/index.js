import React from "react"
import { Header, About, Projects, Footer, Contact } from "../components"

const Break = () => <hr class="break" />

export default function Home() {
  return (
    <div>
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
