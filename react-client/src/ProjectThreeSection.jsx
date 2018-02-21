import React from 'react'; 
import ReactDOM from 'react-dom'; 
import $ from 'jquery'; 





const ProjectThreeSection = (props) => (
  <div>
    <div className="container is-fluid">
      <img className="tilePic" src= 'https://javier-enriquez.000webhostapp.com/ferret6.png' alt="" />
    </div>
    <section className="section section-dark">
              <h2>App Overview</h2>
              <h4 className='has-text-left has-text-white-ter words'>
              WeAreFerrets allows multiple users to join various rooms together and view Youtube video content simultaneously. This is accomplished through the use of <strong className='has-text-white has-text-weight-bold bigText'>React Router</strong> to reroute a user to a specific room and using <strong className='has-text-white has-text-weight-bold bigText'>Websocket.io </strong> to give each room it’s own unique websocket connection allowing all users within the room to interact with one another.
              </h4>
              <br/>
              <h4 className='has-text-left has-text-white-ter words'>
                Each unique room id is stored within the <strong className='has-text-white has-text-weight-bold bigText'>Postgres</strong> database and is used to identify what current playlist is connected to each room as well as what the current video/current play time of playing video is. Inside of a room, user’s can search for new Youtube videos to be added to the video queue, and chat with one another through the built in chat client. If a user sign’s in via <strong className='has-text-white has-text-weight-bold bigText'>Facebook authentication</strong>, they are given the ability to create rooms that others can join and contribute to.
                </h4>
            </section>

    <div className="container">

      <div className="columns">
        <div className="column">

<div className="video-responsive">
<iframe  width="560" height="315" src="https://www.youtube.com/embed/JxUqPo_67IE" frameBorder="10"
allowFullScreen></iframe>


</div>
</div>
      </div>
    </div>
    <section className="section-dark is-meduim">
  <div className="container is-fluid">
  <h1 className="title has-text-white has-text-centered	is-1 is-italic has-text-weight-bold">Tech Stack</h1>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">FrontEnd: React.js/React Router/Flexbox</h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">Server: Express.js/Websocket.io</h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">Database: Postgress</h2>
  </div>



  </section>
  </div>
)

export default ProjectThreeSection

