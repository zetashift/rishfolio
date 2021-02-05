import React from "react"
import Technologies from "./Technologies"

export default function About() {
  return (
    <div class="about-me" id="about">
      <h1>Hello!👋</h1>
      <p>
        I'm a passionate developer, who loves open-source (sharing is caring!)
        and learning. Improving myself is something I try to do everyday. I have
        a natural curiosity to understand why and how things work the way they
        do, especially when it comes to computers. This resulted in me exploring
        domains like Web Development, Game Development and Data Science.
        Computers are great, combined with the internet you get an infinite
        potential for education.
      </p>
      <p>
        Learning and experimenting with shiny new technologies isn't the only
        thing I'm focused on however. I always try to find the right tool for
        solving the problem at hand, this means that sometimes you need to reach out to the proven
        and well established ways of doing things.
      </p>

      <p class="about-me-personal">
        I'm currently based in Rotterdam, The Netherlands. Besides programming,
        I very much enjoy contributing to open-source projects, working out and
        food.
      </p>

      <Technologies />
    </div>
  )
}
