import React from 'react';
import ReactDOM from 'react-dom';

const moveToLink = (id) => (
  document.getElementById(id).scrollIntoView(true)
)

const Footer = () => (
  <footer className="footer">
	  <div className="container">
	    <div className="content has-text-centered">
	      <h2>Contact Info </h2>
	      <p> Javier Enriquez | jav.enriquez@gmail.com | (760) 613-2781   </p>
	      <p> <strong>Jump to: </strong>  <a onClick={()=>moveToLink('Landing')}>Landing</a> | 
	        <a onClick={()=>moveToLink('AboutMe')}>AboutMe</a> | 
	        <a onClick={()=>moveToLink('FunWithTwitch')}>FunWithTwitch</a> | 
	        <a onClick={()=>moveToLink('TriforceEssence')}> TriforceEssence </a> | 
	        <a onClick={()=>moveToLink('WeAreFerrets')}>WeAreFerrets</a> 
	      </p>
	      <p>
	        This site was build using React/Bulma, Express, and is hosted on AWS S3.
	      </p>
	    </div>
	  </div>
  </footer>
)

export default Footer;