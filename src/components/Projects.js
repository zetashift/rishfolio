import React from "react"
import Project from "./Project"

const tags = ["React", "React Router", "Firebase", "Vercel", "Styled Components"]

export default function Projects() {
  return (
    <div id="projects">
      <h1>#Projects</h1>
      <div class="projects-grid">
        <Project projectName="React Netflix Clone" projectTags={tags}></Project>
        <Project
          projectName="PicSome"
          projectTags={tags}
          githubURL="https://github.com/zetashift/react-netflix-clone"
        />
        <Project projectName="Indecision" projectTags={tags} />
        <Project projectName="GodotNimSamples" projectTags={tags} />
      </div>
    </div>
  )
}
