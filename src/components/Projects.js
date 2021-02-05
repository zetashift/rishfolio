import React from "react"
import Project from "./Project"
import projectsData from "../data/projects.json"

const projects = projectsData.map(
  ({ projectName, projectDescription, projectTags, githubURL, siteURL, img, imgAlt }) => (
    <Project
      key={projectName}
      projectName={projectName}
      projectDescription={projectDescription}
      projectTags={projectTags}
      githubURL={githubURL}
      siteURL={siteURL}
      img={img}
      imgAlt={imgAlt}
    />
  )
)

export default function Projects() {
  return (
    <div id="projects">
      <h1>#Projects</h1>
      <div className="projects-grid">{projects}</div>
    </div>
  )
}
