import React from 'react'; 
import ReactDOM from 'react-dom';
import $ from 'jquery'; 


const ProjectOneSection = () => (
<div>
  
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-three-quarters">
            <h1 className="title">
              FunWithTwitch
            </h1>
            <h2 className="subtitle">
              View multiple streams simultaneously and save layouts.
            </h2>
          </div>
          <div className="column">
            <a onClick={()=> window.open('http://blooming-chamber-65699.herokuapp.com', '_blank')} className= "button is-danger is-large"
              >See it in action</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section-dark is-meduim">
    <div className="container is-fluid">
      <div className="columns is-gapless">
        <div className="column is-half">
          <img className="tilePic" src= 'https://javier-enriquez.000webhostapp.com/1singleScreen.png' alt="" />
          <h1 className="has-text-centered">Used non-relational cloud database to allow deployed app to have data persistence.</h1>
        </div>
        <div className="column is-half">
          <img className="tilePic" src= 'https://javier-enriquez.000webhostapp.com/1twoScreensView.png' alt="" />
          <h1 className="has-text-centered">Incorporated Google Sign in to allowed signed in users to save and load stream layouts.</h1>

        </div>
      </div>
      </div>
  </section>

  <section className="section section-dark">
          <h2>Quick Summary</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
          </p>
        </section>

  <section className="section-dark is-meduim">
    <div className="container is-fluid">
      <div className="columns is-gapless">
        <div className="column is-half">
        <img className="tilePic" src= 'https://javier-enriquez.000webhostapp.com/14screens.png' alt="" />
          <h1 className="has-text-centered">Processed live data from Twitch Api through Express Request to improve client side performance.</h1>



        </div>
        <div className="column is-half ">
          <img className="tilePic" src= 'https://javier-enriquez.000webhostapp.com/14screens.png' alt="" />
          <h1 className="has-text-centered">Processed live data from Twitch Api through Express Request to improve client side performance.</h1>


        </div>
      </div>
      </div>
  </section>


  
  <section className="section-dark is-meduim">
  <div className="container is-fluid">
  <h1 className="title has-text-white has-text-centered	is-1 is-italic has-text-weight-bold">Tech Stack</h1>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">FrontEnd: React.js</h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">Server: Express.js</h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">Database: MongoDB/Mlabs</h2>
        <h2 className="subtitle is-3 has-text-white has-text-centered ">Deployment: Heroku</h2>
  </div>



  </section>



  
</div>
) 
export default ProjectOneSection; 

{/*
<div className="tile is-ancestor">
  // // //
  <div className="tile is-8">
    // // //
    <div className="tile">
      // // //
      <div className="tile is-parent">
        // // //
        <article className="tile is-child box">
          // // //
          <img src="https://distinctioncommunication.com/app/uploads/2016/03/blog-posts-768x667.jpg" alt="" /> // //
          <nav className="pagination" role="navigation" aria-label="pagination">
            // // //
            <ul className="pagination-list">
              // // //
              <li>
                // // //
                <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">Single Screen</a>
                // // </li>
              // // //
              <li>
                // // //
                <a className="pagination-link" aria-label="Goto page 2">Two Screens</a>
                // // </li>
              // // //
              <li>
                // // //
                <a className="pagination-link" aria-label="Goto page 3">Four Screens</a>
                // // </li>
              // // //
              <li>
                // // //
                <a className="pagination-link" aria-label="Goto page 3">Saved layouts</a>
                // // </li>
              // // </ul>
            // // </nav>

          // // </article>

        // // </div>

      // // </div>
    // // //
    <div className="tile is-parent">
      // // //
      <article className="tile is-child box">
        // // //
        <h2>Used non relational cloud database to allow deployed app to have data persistence</h2>
        // // //
        <h2>Incorporated Google Sign in to allowed signed in users to save and load stream layouts.</h2>
        // // //
        <h2>Processed live data from Twitch Api through Express Request to improve client side performance.</h2>
        // // </article>
      // // </div>
    // // </div>
  // // //
  <div className="tile is-parent">
    // // //
    <article className="tile is-child box">
      // // //
      <h1>Technologies used</h1>
      // // //
      <ul>
        // // //
        <li>React</li>
        // // //
        <li>Express</li>
        // // //
        <li>Mlabs</li>
        // // //
        <li>Google Auth</li>
        // // //
        <li>Twitch Api</li>
        // // </ul>
      // // </article>
    // // </div>
  // // </div> */}



//   <section className="section-dark is-meduim">
//   <div className="columns ">
//     <div className="column is-half">
//       <div className="columns">
//         <div className="column is-one-half">
          // <div className="FWTInfo">
          //   <h3 className="has-text-centered">Used non relational cloud database to allow deployed app to have data persistence.</h3>
          //   <h3 className="has-text-centered">Incorporated Google Sign in to allowed signed in users to save and load stream layouts.</h3>
          //   <h3 className="has-text-centered">Processed live data from Twitch Api through Express Request to improve client side performance.</h3>
          // </div>
//           <div className="column is-one-half">
//             <h1 className="has-text-centered">TECH STACK</h1>

//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="column is-half">
//       <div className="columns  is-gapless">
//         <div className="column is-one-half ">
//           <img className="tilePic " src='https://javier-enriquez.000webhostapp.com/1singleScreen.png' alt="" />

//           <img className="tilePic" src='https://javier-enriquez.000webhostapp.com/1twoScreensView.png' alt="" />
//         </div>

//         <div className="column is-one-half">

//           <img className="tilePic" src= 'https://javier-enriquez.000webhostapp.com/1singleScreen.png' alt="" />

//           <img className="tilePic" src= 'https://javier-enriquez.000webhostapp.com/1singleScreen.png' alt="" />

//         </div>
//       </div>
//     </div>
//   </div>
// </section>