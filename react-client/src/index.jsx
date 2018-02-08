import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Landing from './Landing.jsx';
import AboutMe from './AboutMe.jsx'; 
import Image from './Image.jsx'; 
import ProjectOne from './ProjectOne.jsx'; 
import ProjectOneSection from './ProjectOneSection.jsx'; 
import ProjectTwo from './ProjectTwo.jsx';

const App = () => (
  <div>
    <Landing/>
    <AboutMe/>
    <Image/>
    <ProjectOne/>
    <ProjectOneSection/>
    <ProjectTwo/>
    <section className="section section-dark">
      <h2>Section Three</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet
        tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis
        sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit
        optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam
        blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
      </p>
    </section>
    <div className="pimg1">
      <div className="ptext">
        <span className="border">
          You Know
        </span>
      </div>
    </div>
    <div className="pimg1">
      <div className="ptext">
        <span className="border">
          I think...
        </span>
      </div>
    </div>
    <div className="pimg1">
      <div className="ptext">
        <span className="border">
          more stuff
        </span>
      </div>
    </div>
  </div>
); 
ReactDOM.render(<App />, document.getElementById('app'));