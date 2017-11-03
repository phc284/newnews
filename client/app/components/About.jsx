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
        <Link to="/"><div style={styles.back}><i style={styles.arrow} className="fa fa-long-arrow-left" aria-hidden="true"></i>
  Map</div></Link>
        <h1 className="brand-heading title">Meet our Team</h1>
      </div>
    </section>

    <section id="description">
      <div className="container">
        <div>
          <h1>We are dotConnection</h1>
          <h3>Forged in the world-renowned labs of Hack Reactor Austin, we are dotConnnection: masters of machine learning and data visualization. Our vision is to bring to the world a news platform unhindered by its creators of bias or political spin.</h3>
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
          <h1>NewNews<img id="watsonpower" src="https://onereach.com/img/watson_poweredby_black.svg"/></h1>
        <div className="row">
          <h3>We have harnessed the power of IBM Watson's Discovery News platform to bring you news data and insights from all over the world. Leveraging the poweful frameworks in amCharts/amMaps (fabulously created by a small team based out of Lithuania) and the Box2D physics engine (famous for its implementation in Angry Birds), we present to you the New News.</h3>
        </div>
      </div>
    </section>

    <section id="julie">
      <div className="container">
        <div className="row">
          <img
            className="profpic left"
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
            className="profpic right"
            src="https://vignette1.wikia.nocookie.net/disney/images/5/54/Maui.jpg/revision/latest?cb=20161226102355"
          />
        </div>
      </div>
    </section>

    <section id="kenny">
      <div className="container">
        <div className="row">
          <img
            className="profpic left"
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
            className="profpic right"
            src="https://vignette1.wikia.nocookie.net/disney/images/5/54/Maui.jpg/revision/latest?cb=20161226102355"
          />
        </div>
      </div>
    </section>
  </div>
);

export default About;
