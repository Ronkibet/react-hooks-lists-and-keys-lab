
import React from "react";
import Links from "./Links";

function About({ bio, links }) 
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );

const links = ["home", "about", "projects"];

function NavBar() {

  return <nav>
    <a key = "home" href= "#home">{links[0]}</a>
    <a key = "about" href= "#about">{links[1]}</a>
    <a key = "projects" href= "#projects">{links[2]}</a>
  </nav>;
}

export default About;