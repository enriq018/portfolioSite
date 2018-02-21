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
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
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