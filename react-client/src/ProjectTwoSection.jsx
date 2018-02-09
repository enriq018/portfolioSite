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
            <h1 className="has-text-centered">User service arhhhhh</h1>
    
            </div>
            <div className="column is-one-third">
    
            <img className="tilePic" src= 'https://javier-enriquez.000webhostapp.com/dbSchema.png' alt="" />
            <h1 className="has-text-centered">Database schemaaaa</h1>
    
            </div>
          </div>
        </div>
    
    
    
        <section className="section section-dark">
        
              <h2>Section Three</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
              </p>
            </section>
    
            <div className="container">
          <div className="columns is-centered">
            <div className="column is-narrow">
            <h1 className="title has-text-black has-text-centered	is-1 is-italic has-text-weight-bold">Art Stress Testing</h1>
    
            <img className="art" src= 'https://javier-enriquez.000webhostapp.com/artileryComparison.png' alt="" />
    
            </div>
    
          </div>
        </div>
    
    
        <section className="section section-dark">
        
        <h2>Section Three</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
        </p>
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
    
      </div>
    
    
)
export default ProjectTwoSection

