import React from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import Fade from "@material-ui/core/Fade";
import MetaTags from "react-meta-tags";

class Etusivu extends React.Component {
  render() {
    return (
      <div
        className="etusivu"
        style={{
          width: "100vw",
          height: "100vh"
        }}
      >
        <MetaTags>
          <title>Portfolio</title>
          <meta name="description" content="Portfolio" />
        </MetaTags>
        <Fade in={true} timeout={3000}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <LeftBox />

              <RightBox />
            </div>
            <div
              className="banner"
              style={{ textAlign: "center", marginBottom: "0px" }}
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
      </div>
    );
  }
}

export default Etusivu;
