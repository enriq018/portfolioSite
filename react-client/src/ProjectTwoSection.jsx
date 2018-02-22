import React from 'react'; 
import ReactDOM from 'react-dom'; 
import $ from 'jquery'; 

const ModalTwo = (props) => (
  <div className= {props.status ? 'modal is-active' : 'modal'}>
    <div className="modal-background"></div>
    <div className="modal-content modal2">
        <img src='https://javier-enriquez.000webhostapp.com/sys_architecture_v3.png' alt=""/>
    </div>
    <button onClick={()=> props.close()} className="modal-close is-large" aria-label="close"></button>
  </div>
);




const ProjectTwoSection = (props) => (
      <div onClick={()=> props.close()}>
        <ModalTwo status={props.status} close={props.close}/>
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
    
            <img className="tilePic" src= 'https://javier-enriquez.000webhostapp.com/user_arch.png' alt="" />
            <h1 className="has-text-centered">User service flow design</h1>
    
            </div>
            <div className="column is-one-third">
    
            <img className="tilePic" src= 'https://javier-enriquez.000webhostapp.com/dbSchema.png' alt="" />
            <h1 className="has-text-centered">Database schema</h1>
    
            </div>
          </div>
        </div>
    
    
    
        <section className="section section-dark">
        
              <h2>App Overview</h2>
              <h4 className='has-text-left has-text-white-ter words'> As a team of four engineers, we wanted to replicate a portion of the Airbnb Experiences microservice architecture that would allow us to handle working with millions of concurrent users and monitor data flow between each of our separate microservices. Each service had specific goals and needed to maintain a certain level of efficiency so that no one service would create a bottleneck for the entire team.</h4>
              <br/>
              <h4 className='has-text-left has-text-white-ter words'> The client service and aggregator service both relied on my service to operate successfully. Whenever a valid user visited the client, a request would be made to my microservice asking for  that user’s recent search history so that the client service could populate the users view with relevant locations. Anytime a user searched for a location, the client would make a request to my service so I could check to see if this was a newly searched location by the specific user. If it was a new search, I would then send the location to the aggregator service so it could keep track of most search locations. </h4>
              <br/>
              <h4 className='has-text-left has-text-white-ter words'> All of my data had relationships with one or more other data points so a <strong className='has-text-white has-text-weight-bold bigText'>relational database </strong> was necessary. I made the decision to use <strong className='has-text-white has-text-weight-bold bigText'>MariaDb</strong> as my database of choice do to its fast reading speeds. Its writing speeds were not as fast as other relational databases, but it was a tradeoff I was willing to take since my service was mainly responsible for relaying user info to other services. In order to relay information from microservice to microservice, multiple <strong className='has-text-left has-text-white-ter words bigText'> Amazon Simple Queue Services </strong> were used to exchange data. </h4>
            </section>
    
            <div className="container">
          <div className="columns is-centered">
            <div className="column is-narrow">
            <h1 className="title has-text-black has-text-centered	is-1 is-italic has-text-weight-bold">Artillery Stress Testing</h1>
    
            <img className="art" src= 'https://javier-enriquez.000webhostapp.com/artileryComparison2.png' alt="" />
    
            </div>
    
          </div>
        </div>
    
    
        <section className="section section-dark">
        
        <h4 className='has-text-left has-text-white-ter words'>
          Upon building out my microservice and ensuring everything was fully functional, the next step was to see how my microservice would perform under increased stress. Initially, my microservice was not able to perform at a desired level and would cause bottlenecks to the rest of the microservice flow if left unchanged so optimizations had to be made. This is made evident by only being able to handle about <strong className='has-text-warning has-text-weight-bold bigText'>60 requests per second </strong> and taking a total of 168886.5 milliseconds <strong className='has-text-warning has-text-weight-bold bigText'>(2 min and 50 sec)</strong> to complete <strong className='has-text-white has-text-weight-bold bigText'> 10,000 requests </strong>. 
        </h4>
        <br/>
        <h4 className='has-text-left has-text-white-ter words'>
                My first optimization involved restructuring my database query logic and converting a six step query into a four step one. This did improve my response per second time, but not significantly enough to be satisfied with.

        </h4>
        <br/>
        <h4 className='has-text-left has-text-white-ter words'>
          My main optimization came from restructuring my MariaDb database schema to incorporate <strong className='has-text-white has-text-weight-bold bigText'>indexing</strong> improving lookup speeds. This optimization allowed my microservice to handle about <strong className='has-text-success has-text-weight-bold bigText'>1,280 requests per second</strong> and finish <strong className='has-text-white has-text-weight-bold bigText'>10,000 requests</strong> in about 6,005 milliseconds <strong className='has-text-success has-text-weight-bold bigText'>(6 seconds)</strong> which was well within my teams goal.</h4>
        <br/>

      </section>
    
        <section className="section is-meduim">
        <div className="container">
        <div className="columns">
          <div className="column">
            <div className="video-responsive">
              <iframe  width="560" height="315" src="https://www.youtube.com/embed/8zyRCkLPjO0?rel=0" frameBorder="10"
            allowFullScreen></iframe>
            </div>
          </div>
        </div>
    
        </div>
        </section>

            <section className="section-dark is-meduim">
  <div className="container is-fluid">
  <h1 className="title has-text-white has-text-centered is-1 is-italic has-text-weight-bold">Tech Stack</h1>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">Server: Express.js</h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">Database: MariaDb</h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">Queue: Amazon Simple Queue Service</h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">Deployment: Amazon EC2</h2>


  </div>



  </section>
    
      </div>
    
    
)
export default ProjectTwoSection

