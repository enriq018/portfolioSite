import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Landing from './Landing.jsx';
import AboutMe from './AboutMe.jsx'; 
import Image from './Image.jsx'; 
import ProjectOne from './ProjectOne.jsx'; 
import ProjectOneSection from './ProjectOneSection.jsx'; 
import ProjectTwo from './ProjectTwo.jsx';
import ProjectThree from './ProjectThree.jsx';


const App = () => (
  <div>
    <Landing/>
    <AboutMe/>
    <Image/>
    <ProjectOne/>
    <ProjectOneSection/>
    <ProjectTwo/>
    <ProjectThree/>
    <footer className="footer">
  <div className="container">
    <div className="content has-text-centered">
      <h2>Contact Info </h2>
      <p> Javier Enriquez | jav.enriquez@gmail.com | (760) 613-2781   </p>
      <p> <strong>Jump to: </strong>  <a href="#Landing">Landing</a> | <a href="#AboutMe">AboutMe</a> | <a href="#FunWithTwitch">FunWithTwitch</a> | <a href="#TriforceEssence"> TriforceEssence </a> | <a href="#WeAreFerrets">WeAreFerrets</a> </p>


      <p>
        This site was build using React/Bulma, Express, and is hosted on AWS S3.
      </p>
    </div>
  </div>
</footer>



  </div>
); 
ReactDOM.render(<App />, document.getElementById('app'));


{/* <div className="pimg1">
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
</div> */}