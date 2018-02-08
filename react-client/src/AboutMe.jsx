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
        <p>I am a results driven problem solver who is always looking to bring value to those around me while having a good
          time!</p>
        <p>A San Diego native currently living in San Francisco</p>
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
        <h6>I am currently employed at Hack Reactor as a Software Engineering Fellow assisting students</h6>
        <p>I completed the Advanced Software Engineering Immersive Program</p>
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
        <p>I graduated with a degree in Criminology and Justice Studies</p>
        <p>I want to make the world a safer place for everyone</p>
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

