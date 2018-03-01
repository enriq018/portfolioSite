import React from "react";
import ReactDOM from "react-dom";

const Resume = props => (
  <div className={props.resumeClicked ? "modal is-active" : "modal"}>
    <div onClick={() => props.resumeClick()} className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Javier Enriquez Resume</p>
        <button
          onClick={() => props.resumeClick()}
          className="button"
          className="delete"
          aria-label="close"
        />
      </header>
      <section className="modal-card-body">
        <img
          src="https://javier-enriquez.000webhostapp.com/JavierEnriquezResume-page-001.jpg"
          alt=""
        />
      </section>
      <footer className="modal-card-foot">
        <a
          className="button is-success "
          href="https://javier-enriquez.000webhostapp.com/JavierEnriquezResume.pdf"
          download
        >
          {" "}
          Download as a pdf
        </a>
        <button onClick={() => props.resumeClick()} className="button">
          Cancel
        </button>
      </footer>
    </div>
  </div>
);

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeClicked: false
    };
    this.resumeClick = this.resumeClick.bind(this);
  }
  resumeClick() {
    this.setState({ resumeClicked: !this.state.resumeClicked });
  }

  render() {
    return (
      <div id="Landing" className="pimg1">
        <div className="ptext javi3">
          <h1 className="javi">Javier Enriquez</h1>
          <h4 className="javi2">Software Engineer </h4>
        </div>
      </div>
    );
  }
}

export default Landing;
