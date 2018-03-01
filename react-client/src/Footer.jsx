import React from "react";

const moveToLink = id => document.getElementById(id).scrollIntoView(true);

const Footer = () => (
  <footer className="footer">
    <div className="container is-fluid">
      <div className="column">
        <div className="content has-text-centered">
          <h1 className="contactInfo">Contact Info </h1>
          <p className="contactInfoContent ">
            {" "}
            Javier Enriquez | jav.enriquez@gmail.com | (760) 613-2781{" "}
          </p>
          <h5>
            {" "}
            <strong>Jump to: </strong>{" "}
            <a onClick={() => moveToLink("Landing")}>Landing</a> |
            <a onClick={() => moveToLink("AboutMe")}> AboutMe</a> |
            <a onClick={() => moveToLink("FunWithTwitch")}> FunWithTwitch</a> |
            <a onClick={() => moveToLink("TriforceEssence")}>
              {" "}
              TriforceEssence{" "}
            </a>{" "}
            |
            <a onClick={() => moveToLink("WeAreFerrets")}> WeAreFerrets</a>
          </h5>
        </div>
      </div>
      <div className="content has-text-centered">
        <a className="button is-dark is-large is-4 is-unselectable">
          <span>This site was built using React </span>
          <span className="icon is-large">
            <i className="fab fa-react" aria-hidden="true" />
          </span>

          <span>, Express </span>
          <span className="icon is-large">
            <i className="fab fa-node-js" aria-hidden="true" />
          </span>

          <span>, and is hosted on Amazon S3 </span>
          <span className="icon is-large">
            <i className="fab fa-aws" aria-hidden="true" />
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
