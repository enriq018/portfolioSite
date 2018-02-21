import React from 'react'; 
import ReactDOM from 'react-dom'; 
import $ from 'jquery';

const Me = () => (
<div className="column">
  <div className="card">
    <div className="card-image">
      <div className="image is-2by1">
        <img className="biopic" src="https://static.pexels.com/photos/457882/pexels-photo-457882.jpeg" alt="Placeholder image" />
      </div>
    </div>
    <div className="card-content">
      <div className="content">
        <p>I'm a <strong> results driven </strong> problem solver who's always looking to bring value to those around me while having a good
          time!</p>
        <p>San Diego native living in San Francisco surving the SoCal to NorCal weather changes /s</p>
        <p>I enjoy anything competitive and a huge sports/e-sports fan (Patriots, Warriors, C9) </p>

      </div>
    </div>
  </div>
</div>

) 

const Hack= () => (
<div className="column">
  <div className="card">
    <div className="card-image">
      <div className="image is-2by1">
        <img src="https://www.codecity.co/wp-content/uploads/2017/06/Hack-Reactor-Logo-1024x512.jpg" alt="Placeholder image" />
      </div>
    </div>
    <div className="card-content">
      <div className="content">
        <p>I am currently employed at Hack Reactor as a <strong> Software Engineering Fellow</strong>. </p>
        <p>My tasks include assisting students improve their understanding of full-stack applications, debugging strategies, data structures, as well as giving lectures on toy problem solutions with time complexity and algorithim patterns.</p>
      </div>
    </div>
  </div>
</div>
) 
const College = () => (
<div className="column">
  <div className="card">
    <div className="card-image">
      <div className="image is-2by1">
        <img src="http://www.sandiegobusiness.org/sites/default/files/csusmLogo_FullNameHillsAbove_Blue.jpg?1472162556" alt="Placeholder image" />
      </div>
    </div>
    <div className="card-content">
      <div className="content">
        <p>Graduated with a degree in Criminology and Justice Studies focusing in BS</p>
        <p>Was highly involved with campus organizations and held multiple leadership positions </p>
          <p>Orientation Team Leader</p>
          <p>Alpha Psi Rho</p>
          <p>Cross Cultural Center Peer Educator</p>
      </div>
    </div>
  </div>
</div>
) 

const Section = (props) => (
<div>
<section className="hero is-info">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          About Me:
        </h1>
      </div>
    </div>
  </section>
  <section className="section section-light">
  
  <span> </span>
    <div className="columns is-desktop">
      <Me/>
      <Hack/>
      <College/>
    </div>

  </section>
</div>
);

export default Section;

