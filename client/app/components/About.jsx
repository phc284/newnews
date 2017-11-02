import React from "react";
import { render } from "react-dom";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from 'react-router-dom'

const styles = {
  arrow: {
    marginRight: 5
  },
  button: {
    padding: 1,
    borderStyle: "solid",
    borderWidth: 2
  },
  back: {
    color: 'white',
    position: 'absolute',
    top: '15px',
    left: '15px'
  }
};

const About = () => (
  <div className="aboutpage">
    <section id="intro">
      <div className="container-fluid">
        <Link to="/"><div style={styles.back}><i style={styles.arrow} class="fa fa-long-arrow-left" aria-hidden="true"></i>
  Map</div></Link>
        <h1 className="brand-heading">Meet our Team</h1>
      </div>
    </section>

    <section id="description">
      <div className="container">
        <div>
          <h1>We are dotConnection</h1>
          <h3>We are a team of software engineers trying to bring awareness to news that happens outside of our own bubble</h3>
          <span>
            <RaisedButton buttonStyle={{ padding: 5 }} style={styles.button}>
              <a
                target="_blank"
                href="https://github.com/dotConnection/newnews"
              >
                View Our Github
              </a>
            </RaisedButton>
          </span>
        </div>
      </div>
    </section>

    <section id="design">
      <div className="container">
          <h1>The Process</h1>
        <div className="row">
          <img id="watsonpower" src="https://onereach.com/img/watson_poweredby_black.svg"/>
          <h3>Using the power of IBM Watson's Discovery News, we were able to gather ......</h3>
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
            <h3>
              Software Engineer
            </h3>
          </div>
        </div>
      </div>
    </section>

    <section id="jonathan">
      <div className="container">
        <div className="row">
          <div>
            <h1>Jonathan Cao</h1>
            <h3>
              Software Engineer
            </h3>
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
            <h3>
              Software Engineer
            </h3>
          </div>
        </div>
      </div>
    </section>

    <section id="peter">
      <div className="container">
        <div className="row">
          <div>
            <h1>Peter Choi</h1>
            <h3>
              Software Engineer
            </h3>
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
