import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Document from './Document.jsx';

const Resume = (props) => (
  <div className= {props.resumeClicked ? 'modal is-active' : 'modal'}>
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Javier Enriquez Resume</p>
        <button onClick={()=> props.resumeClick()} className="button" className="delete" aria-label="close"></button>
      </header>
      <section className="modal-card-body">
        <Document/>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Download as PDF paperclicklogo</button>
        <button onClick={()=> props.resumeClick()} className="button">Cancel</button>
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
    this.setState({resumeClicked: !this.state.resumeClicked});
  }

  render() {
    return (
      <div className="pimg1">
        <div className="ptext">
          LANDING
          <Resume resumeClicked={this.state.resumeClicked} resumeClick={this.resumeClick}/>
          <h1 className="javi">Javier Enriquez</h1>
          <h4>Software Engineer </h4>
          <a onClick={()=> this.resumeClick()} className= "button is-link is-medium landingButtons" >Resume</a>
          <span> </span>
          <a onClick={()=> window.open('https://github.com/enriq018/', '_blank')} className="button is-medium">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
          <span> </span>
          <a onClick={()=> window.open('https://www.linkedin.com/in/javier-enriquez/', '_blank')} className= "button is-outlined is-medium landingButtons" >linkedin</a>   
        </div>
      </div>
    );
  }
}


// const Landing = (props) => (
//   <div className="pimg1">
//     <div className="ptext">
//       LANDING
//       <Resume/>
//       <h1 className="javi">Javier Enriquez</h1>
//       <h4>Software Engineer </h4>
//       <a onClick={()=> console.log('clicked!')} className="button is-white">Resume</a>
//     </div>
//   </div>
// );

export default Landing;