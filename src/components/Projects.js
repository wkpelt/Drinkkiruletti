import React from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

class Projects extends React.Component {
  render() {
    return (
      <div
        className="etusivu"
        style={{
          width: "100vw",
          height: "100vh"
        }}
      >
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
            <h4>Projects</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
