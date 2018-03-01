import React from "react";
import ReactDOM from "react-dom";
import ProjectThreeSection from "./ProjectThreeSection";

const ProjectThree = props => (
  <div>
    <div className="pimg5">
      <div className="ptext" />
    </div>
    <section id="WeAreFerrets" className="hero is-link">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title ferret is-size-1">WeAreFerrets</h1>
              <h2 className="subtitle">
                Watch videos/chat with other's in real time and share playlist
                through web sockets.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ProjectThreeSection />
  </div>
);

export default ProjectThree;
