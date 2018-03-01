import React from "react";
import ReactDOM from "react-dom";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Image from "./Image";
import ProjectOne from "./ProjectOne";
import ProjectOneSection from "./ProjectOneSection";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import Footer from "./Footer";

const App = () => (
  <div>
    <Landing />
    <AboutMe />
    <Image />
    <ProjectOne />
    <ProjectOneSection />
    <ProjectTwo />
    <ProjectThree />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

// "https://javier-enriquez.000webhostapp.com/landingVideo.mp4"
