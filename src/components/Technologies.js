import React from "react"
import { DiScala } from "@react-icons/all-files/di/DiScala"
import { DiJavascript } from "@react-icons/all-files/di/DiJavascript"
import { DiPython } from "@react-icons/all-files/di/DiPython"
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5"
import { DiCss3 } from "@react-icons/all-files/di/DiCss3"
import { DiSass } from "@react-icons/all-files/di/DiSass"
import { AiOutlineConsoleSql } from "@react-icons/all-files/ai/AiOutlineConsoleSql.esm"
import { SiNim } from "@react-icons/all-files/si/SiNim"
import { SiGodotengine } from "@react-icons/all-files/si/SiGodotengine"
import { DiGit } from "@react-icons/all-files/di/DiGit"
import { DiLinux } from "@react-icons/all-files/di/DiLinux"
import { SiElixir } from "@react-icons/all-files/si/SiElixir"

// This might seem like a big component
// But it's just a grid with a lot of cells
// Each cell representing a technology I'm invested in
export default function Technologies() {
  return (
    <div className="techs">
      <h2>
        Technologies I <span role="img" aria-label="love"> ❤️</span>:
      </h2>
      ️
      <div className="tech-grid">
        <a href="https://www.scala-lang.org/">
          <div className="tech">
            <div className="tech-icon">
              <DiScala />
            </div>
            Scala
          </div>
        </a>

        <a href="https://www.python.org/">
          <div className="tech">
            <div className="tech-icon">
              <DiPython />
            </div>
            Python
          </div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <div className="tech">
            <div className="tech-icon">
              <DiJavascript />
            </div>
            Javascript
          </div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
          <div className="tech">
            <div className="tech-icon">
              <DiHtml5 />
            </div>
            HTML
          </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <div className="tech">
            <div className="tech-icon">
              <DiCss3 />
            </div>
            CSS3
          </div>
        </a>

        <a href="https://sass-lang.com/">
          <div className="tech">
            <div className="tech-icon">
              <DiSass />
            </div>
            Sass/SCSS
          </div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL">
          <div className="tech">
            <div className="tech-icon">
              <AiOutlineConsoleSql />
            </div>
            SQL
          </div>
        </a>

        <a href="https://nim-lang.org/">
          <div className="tech">
            <div className="tech-icon">
              <SiNim />
            </div>
            Nim
          </div>
        </a>

        <a href="https://godotengine.org/">
          <div className="tech">
            <div className="tech-icon">
              <SiGodotengine />
            </div>
            Godot
          </div>
        </a>

        <a href="https://git-scm.com/">
          <div className="tech">
            <div className="tech-icon">
              <DiGit />
            </div>
            Git
          </div>
        </a>

        <a href="https://www.kernel.org/">
          <div className="tech">
            <div className="tech-icon">
              <DiLinux />
            </div>
            Linux
          </div>
        </a>

        <a href="https://elixir-lang.org/">
          <div className="tech">
            <div className="tech-icon">
              <SiElixir />
            </div>
            Elixir
          </div>
        </a>

        <div className="tech-text">...And many more to come!</div>
      </div>
    </div>
  )
}
