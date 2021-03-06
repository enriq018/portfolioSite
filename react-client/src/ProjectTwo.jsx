import React from "react";
import ReactDOM from "react-dom";
import ProjectTwoSection from "./ProjectTwoSection.jsx";

class ProjectTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  open() {
    this.setState({ status: true });
  }
  close() {
    this.setState({ status: false });
  }
  render() {
    return (
      <div>
        <div className="pimg3">
          <div className="ptext">
            <span className="border trans" />
          </div>
        </div>
        <div className="pimg3">
          <div className="ptext">
            <span className="border trans" />
          </div>
        </div>
        <div className="pimg3">
          <div className="ptext">
            <span className="border trans" />
          </div>
        </div>
        <section id="TriforceEssence" className="hero is-danger">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-three-quarters">
                  <h1 className="title is-size-1">TriforceEssence</h1>
                  <h2 className="subtitle">
                    Replicated Airbnb microservice architecture to test specific
                    user interations and monitor data flow.
                  </h2>
                </div>
                <div className="column">
                  <a
                    onClick={() => this.open()}
                    className="button is-warning is-large"
                  >
                    <span>View architecture </span>
                    <span className="icon is-small">
                      <i className="fas fa-eye" aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProjectTwoSection status={this.state.status} close={this.close} />
      </div>
    );
  }
}
export default ProjectTwo;
