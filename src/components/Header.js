import React from "react"
import Headroom from "react-headroom"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"

const Logo = () => (
  <div id="logo">
    <h1>Rishad</h1>
    <div id="logo-circle">RS</div>
    <h1>Sewnarain</h1>
  </div>
)

export default function Header() {
  return (
    <Headroom>
      <nav>
        <Logo />
        <div className="nav-links">
          <AnchorLink to="#about" title="About" className="nav-link" />
          <AnchorLink to="#projects" title="Projects" className="nav-link" />
          <AnchorLink to="#contact" title="Contact" className="nav-link" />
          <div className="nav-icons">
            <a href="https://github.com/zetashift" className="nav-link-icon">
              <AiOutlineGithub />
            </a>
            <a href="mailto:rskaraya@gmail.com" className="nav-link-icon">
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </nav>
    </Headroom>
  )
}
