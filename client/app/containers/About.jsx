import React from "react";
import { render } from "react-dom";
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    padding: 1,
    borderStyle: 'solid',
    borderWidth: 2,
  }
}

const About = () => (
  <div className="aboutpage">
    <section id="intro">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h1 className="brand-heading">Meet the Team</h1>
          </div>
        </div>
      </div>
    </section>

    <section id="description">
      <div className="container">
          <div>
            <h1>We are dotConnection</h1>
            <h4>We are bringing blah blah blah blah blah blah blah blah blah blah blah blah blah blah</h4>
            <span><RaisedButton buttonStyle ={{padding: 5}}style={styles.button}><a target="_blank" href="https://github.com/dotConnection/newnews"> View Our Github </a></RaisedButton></span>
         </div>
        </div>
    </section>

    <section id="julie">
      <div className="container">
        <div className="row">
          <img
            className="profpic"
            src="https://vignette1.wikia.nocookie.net/disney/images/5/54/Maui.jpg/revision/latest?cb=20161226102355"
          />
          <div>
            <h1>Julie Johnson</h1>
            <h4>Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something </h4>
          </div>
        </div>
      </div>
    </section>

    <section id="jonathan">
      <div className="container">
        <div className="row">
          <div>
            <h1>Jonathan Cao</h1>
            <h4>Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something </h4>
          </div>
          <img
          className="profpic"
          src="https://vignette1.wikia.nocookie.net/disney/images/5/54/Maui.jpg/revision/latest?cb=20161226102355"
          />
        </div>
      </div>
    </section>

    <section id="kenny">
      <div className="container">
        <div className="row">
          <img
            className="profpic"
            src="https://pbs.twimg.com/profile_images/700753841495486464/aJgO79C9.png"
          />
          <div>
            <h1>Kenneth Kang</h1>
            <h4>Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something </h4>

          </div>
        </div>
      </div>
    </section>

    <section id="peter">
      <div className="container">
        <div className="row">
          <div>
            <h1>Peter Choi</h1>
            <h4>Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something Something </h4>

          </div>
          <img
          className="profpic"
          src="https://vignette1.wikia.nocookie.net/disney/images/5/54/Maui.jpg/revision/latest?cb=20161226102355"
          />
        </div>
      </div>
    </section>
  </div>
);

export default About;
