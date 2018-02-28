import React from 'react';

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

const Section = () => (
  <div>
    <section id="AboutMe" className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            About Me:
          </h1>
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
);

export default Section;

