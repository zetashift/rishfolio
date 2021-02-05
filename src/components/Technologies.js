import React from "react"
import { DiScala } from "@react-icons/all-files/di/DiScala"
import { DiJavascript } from "@react-icons/all-files/di/DiJavascript"
import { DiPython } from "@react-icons/all-files/di/DiPython"
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5"
import { DiCss3 } from "@react-icons/all-files/di/DiCss3"
import { DiSass } from "@react-icons/all-files/di/DiSass"
import { AiOutlineConsoleSql } from "@react-icons/all-files/ai/AiOutlineConsoleSql.esm";
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
    <div class="techs">
      <h2>Technologies I ❤: </h2>️
      <div class="tech-grid">
        <a href="https://www.scala-lang.org/">
          <div class="tech">
            <div class="tech-icon">
              <DiScala />
            </div>
            Scala
          </div>
        </a>

        <a href="https://www.python.org/">
          <div class="tech">
            <div class="tech-icon">
              <DiPython />
            </div>
            Python
          </div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <div class="tech">
            <div class="tech-icon">
              <DiJavascript />
            </div>
            Javascript
          </div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
          <div class="tech">
            <div class="tech-icon">
              <DiHtml5 />
            </div>
            HTML
          </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <div class="tech">
            <div class="tech-icon">
              <DiCss3 />
            </div>
            CSS3
          </div>
        </a>

        <a href="https://sass-lang.com/">
          <div class="tech">
            <div class="tech-icon">
              <DiSass />
            </div>
            Sass/SCSS
          </div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL">
          <div class="tech">
            <div class="tech-icon">
              <AiOutlineConsoleSql />
            </div>
            SQL
          </div>
        </a>

        <a href="https://nim-lang.org/">
          <div class="tech">
            <div class="tech-icon">
              <SiNim />
            </div>
            Nim
          </div>
        </a>

        <a href="https://godotengine.org/">
          <div class="tech">
            <div class="tech-icon">
              <SiGodotengine />
            </div>
            Godot
          </div>
        </a>

        <a href="https://git-scm.com/">
          <div class="tech">
            <div class="tech-icon">
              <DiGit />
            </div>
            Git
          </div>
        </a>

        <a href="https://www.kernel.org/">
          <div class="tech">
            <div class="tech-icon">
              <DiLinux />
            </div>
            Linux
          </div>
        </a>

        <a href="https://www.kernel.org/">
          <div class="tech">
            <div class="tech-icon">
              <SiElixir />
            </div>
            Elixir
          </div>
        </a>

        <div class="tech-text">...And many more to come!</div>
      </div>
    </div>
  )
}
