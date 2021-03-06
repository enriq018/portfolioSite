import React from 'react';


const Resume = props => (
  <div className={props.resumeClicked ? "modal is-active" : "modal"}>
    <div onClick={() => props.resumeClick()} className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title content has-text-centered">
          Javier Enriquez's Resume
        </p>
        <button
          onClick={() => props.resumeClick()}
          className="button"
          className="delete"
          aria-label="close"
        />
      </header>
      <section className="modal-card-body">
        <img className="resumeModal"
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
          <span>Download as a PDF </span>
          <span className="icon is-large">
            <i className="fas fa-download" aria-hidden="true" />
          </span>
        </a>
        <button onClick={() => props.resumeClick()} className="button">
          Cancel
        </button>
      </footer>
    </div>
  </div>
);


/////////////////////////////////////////////////////////////
const Me = () => (
  <div className="column">
    <div className="card">
      <div className="card-image">
        <div className="image">
          <img id="biopic" src="https://javier-enriquez.000webhostapp.com/BioPicFinal.jpg" alt="" />
        </div>
      </div>
      <div className="card-content">
        <div className="content">
          <p>I'm a <strong> results driven </strong> problem solver who's always looking to bring
          value to those around me while having a good time!
          </p>
          <p>I enjoy anything competitive and a huge sports/e-sports
             fan (Patriots, Warriors, C9)
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Hack = () => (
  <div className="column">
    <div className="card">
      <div className="card-image">
        <div className="image is-2by1">
          <img src="https://www.codecity.co/wp-content/uploads/2017/06/Hack-Reactor-Logo-1024x512.jpg" alt="" />
        </div>
      </div>
      <div className="card-content">
        <div className="content">
          <p>
            I'm currently employed at Hack Reactor as a
            <strong> Software Engineering Fellow</strong>.
          </p>
          <p>My tasks include assisting students improve their understanding of full-stack
          applications, debugging strategies, data structures, as well as giving lectures on toy
          problem solutions with time complexity and algorithim patterns.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const College = () => (
  <div className="column">
    <div className="card">
      <div className="card-image">
        <div className="image is-2by1">
          <img id="csusm" src="http://www.sandiegobusiness.org/sites/default/files/csusmLogo_FullNameHillsAbove_Blue.jpg?1472162556" alt="" />
        </div>
      </div>
      <div className="card-content">
        <div className="content">
          <p>I graduated with a Bachelor of Arts in Criminology & Justice Studies.</p>
          <p>During my time as a student, I was highly involved with campus organizations and held
           multiple leadership positions. Some titles include being an Orientation Team Leader and
           Cross Cultural Center Peer Educator.
          </p>
        </div>
      </div>
    </div>
  </div>
);

class Section extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        resumeClicked: false
      }
      this.resumeClick = this.resumeClick.bind(this);
    }
  resumeClick() {
    this.setState({resumeClicked: !this.state.resumeClicked});
  }
  render() {
    return (
  <div>
    <section id="AboutMe" className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
           <div className="column is-4">
            <h1 className="title">
              About Me:
            </h1>
           </div>
           <div className="column is-8">
             <Resume resumeClicked={this.state.resumeClicked} resumeClick={this.resumeClick}/>
            <a onClick={()=> this.resumeClick()} className= "button is-outlined is-large landingButtons" >
                  <span>Resume </span>
                  <span className="icon is-small">
                  <i className="far fa-address-card" aria-hidden="true" />
                </span>
            </a>
            <span> </span>
            <a onClick={()=> window.open('https://github.com/enriq018/', '_blank')} className="button is-large landingButtons">
              <span>GitHub </span>
              <span className="icon ">
                <i className="fab fa-github "></i>
              </span>
            </a>
            <span> </span>
            <a onClick={()=> window.open('https://www.linkedin.com/in/javier-enriquez/', '_blank')} className= "button is-outlined is-large landingButtons">
                      <span>Linkedin </span>
                  <span className="icon is-small">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </span>
            </a>

           </div>
          </div>
          </div>
      </div>
    </section>
    <section className="section section-light">
      <span />
      <div className="columns is-desktop">
        <Me />
        <Hack />
        <College />
      </div>
    </section>
  </div>
)
  }
}

export default Section;

