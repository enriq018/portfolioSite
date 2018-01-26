import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Landing from './Landing.jsx';
import Section from './Section.jsx';
import Image from './Image.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    };
  }

  render () {
    return (
      <div>
        <Landing/>
        <Section/>
        <Image/>


        <section className="section section-dark">
          <h2>Section Two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
          </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">
              Image Three Text
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Section Three</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
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
              TOU STINK
            </span>
          </div>
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// import React from 'react';
// import { render } from 'react-dom';

// function App() {
  
// }

// render(<App />, document.querySelector('#app'));

    // <Button raised color="primary">
    //   Hello World
    // </Button>



  // <G test={['https://source.unsplash.com/1600x900/?mountain',
  //   'https://source.unsplash.com/1600x900/?corgi','https://source.unsplash.com/1600x900/?beach', 
  //   'https://source.unsplash.com/1600x900/?forest', 'https://source.unsplash.com/1600x900/?car', 'https://source.unsplash.com/1600x900/?food' ]}/>