import React from "react";
import ReactDOM from "react-dom";

const ProjectOneSection = () => (
  <div>
    <section id="FunWithTwitch" className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters">
              <h1 className="title is-size-1">FunWithTwitch</h1>
              <h2 className="subtitle">
                View multiple streams simultaneously and save layouts.
              </h2>
            </div>
            <div className="column">
              <a
                onClick={() =>
                  window.open(
                    "http://blooming-chamber-65699.herokuapp.com",
                    "_blank"
                  )
                }
                className="button is-danger is-large"
              >
                <span>See it in action </span>
                <span className="icon is-small">
                  <i className="fas fa-share" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-dark is-meduim">
      <div className="container is-fluid">
        <div className="columns is-gapless">
          <div className="column is-half">
            <img
              className="tilePic"
              src="https://javier-enriquez.000webhostapp.com/1screen.png"
              alt=""
            />
            <h1 className="has-text-centered">
              Used non-relational cloud database to allow deployed app to have
              data persistence.
            </h1>
          </div>
          <div className="column is-half">
            <img
              className="tilePic"
              src="https://javier-enriquez.000webhostapp.com/2screen.png"
              alt=""
            />
            <h1 className="has-text-centered">
              Incorporated Google Sign in to allowed signed in users to save and
              load stream layouts.
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2>App Overview</h2>

      <h4 className="has-text-left">
        Fun with Twitch allows users to watch multiple twitch streams at once
        and save layouts if they are signed in through their google account.
        This is accomplished by using the{" "}
        <strong className="bigText">Twitch API </strong> to gather a list of the
        current top 20 streamers and populate a dropdown menu within the main
        app’s <strong className="bigText">componentDidMount</strong> method.
      </h4>
      <br />
      <h4 className="has-text-left">
        If a desired streamer isn’t on the list, a user can also search for a
        stream by streamer name as well. Everytime a streamer is selected, the
        React state in the main app of component is updated in a{" "}
        <strong className="bigText">unidirectional </strong> manner. Each stream
        is a seperate react component and the number of screens selected
        determines how many streams are rendered to the user.
      </h4>
      <br />

      <h4 className="has-text-left">
        Upon a user successfully signing in, a GET request is made to my{" "}
        <strong className="bigText">express</strong> server to retrieve all of
        the users previously saved groups and the ability to save/view layouts
        is presented to the user. Saving a group works by sending a POST request
        to my server containing all the current streamers/unique user info and
        then being inserted into a cloud{" "}
        <strong className="bigText">non relational</strong> database(Mlabs). The
        entire application was deployed using{" "}
        <strong className="bigText">Heroku</strong>.
      </h4>
    </section>

    <section className="section-dark is-meduim">
      <div className="container is-fluid">
        <div className="columns is-gapless">
          <div className="column is-half">
            <img
              className="tilePic"
              src="https://javier-enriquez.000webhostapp.com/4screens3.png"
              alt=""
            />
            <h1 className="has-text-centered">
              Processed live data from Twitch Api through Express to improve
              client side performance.
            </h1>
          </div>
          <div className="column is-half ">
            <img
              className="tilePic"
              src="https://javier-enriquez.000webhostapp.com/4screens2.png"
              alt=""
            />
            <h1 className="has-text-centered">
              Rendered databaase information with React components styled using
              Flexbox/Bulma.
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section className="section-dark is-meduim">
      <div className="container is-fluid">
        <h1 className="title has-text-white has-text-centered	is-1 is-italic has-text-weight-bold">
          Tech Stack
        </h1>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">
          FrontEnd: React.js/FlexBox/Bulma
        </h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">
          Server: Express.js
        </h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">
          Database: MongoDB/Mlabs
        </h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">
          Deployment: Heroku
        </h2>
      </div>
    </section>
  </div>
);
export default ProjectOneSection;
