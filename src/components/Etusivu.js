import React from "react";
import DrawerBox from "./DrawerBox";

class Etusivu extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh"
        }}
      >
        <DrawerBox />
      </div>
    );
  }
}

export default Etusivu;
