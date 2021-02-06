import React from "react"

export default function Project({
  projectName,
  projectDescription,
  projectTags,
  githubURL,
  siteURL,
  img,
  imgAlt,
}) {
  return (
    <div className="project-container">
      <a href={siteURL}><img src={img} alt={imgAlt} width="100%" height="400px" /></a>
      <h1 className="project-title">{projectName}</h1>
      
        <p className="project-description">{projectDescription}</p>
        <div className="project-tags">
          {projectTags.map(tag => (
            <h3 key={tag}>{tag}</h3>
          ))}
        </div>
        <div className="project-links">
          {githubURL ? (
            <a href={githubURL} className="project-link">
              Github
            </a>
          ) : (
            <></>
          )}
          {siteURL ? (
            <a href={siteURL} className="project-link">
              Live Site
            </a>
          ) : (
            <></>
          )}
      </div>
    </div>
  )
}
