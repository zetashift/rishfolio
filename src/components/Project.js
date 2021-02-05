import React from "react"


export default function Project({
  projectName,
  projectDescription,
  projectTags,
  githubURL,
  siteURL,
}) {
  return (
    <div class="project-container">
      <img src="https://picsum.photos/200/200" alt="Project thumbnail" />
      <h1 className="project-title">{projectName}</h1>
      <p className="project-description">
        A React project where I implemented a lot of functionality of the
        Netflix site, including signup/signin functionality, browse page and
        more in a Single Page Application
      </p>
      <div className="project-tags">
        {projectTags.map(tag => <h3>{tag}</h3>)}
      </div>
      <div className="project-links">
        <a href={githubURL} className="project-link">
          
          Github
        </a>
        <a className="project-link">Live Site</a>
      </div>
    </div>
  )
}
