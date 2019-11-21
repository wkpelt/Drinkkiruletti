import React from "react";
import LeftBox from "./LeftBox";
//import RightBox from "./RightBox";
import MetaTags from "react-meta-tags";
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";

class Etusivu extends React.Component {
  constructor(props) {
    super(props);
    this.AboutMeRef = React.createRef();
    this.ProjectsRef = React.createRef();
  }
  render() {
    return (
      <div className="etusivu" style={{ height: "100vh" }}>
        <MetaTags>
          <title>Portfolio</title>
          <meta name="description" content="Portfolio" />
        </MetaTags>
        <Particles style={{ position: "absolute", opacity: "0.5" }} />
        <Fade timeout={3000}>
          <div>
            <div
              className="header"
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <LeftBox />
              {/* <RightBox refprop={this.AboutMeRef} /> */}
            </div>
            <div
              className="banner"
              style={{
                textAlign: "center",
                marginBottom: "0px",
                height: "100%"
              }}
            >
              <h1>Wiljam Peltomaa</h1>
              <h4>epi.fi</h4>
            </div>
            <div className="social">
              <a
                href="https://github.com/wkpelt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/wiljampeltomaa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </Fade>
        {/*         <div
          style={{
            marginTop: "100vh",
            display: "flex",
            justifyContent: "center"
          }}
          ref={this.AboutMeRef}
        >
          <h2>About me</h2>
        </div>
        <Fade>
          <p>moi</p>
        </Fade> */}
      </div>
    );
  }
}

export default Etusivu;
