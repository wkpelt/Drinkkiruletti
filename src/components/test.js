import React from "react";
import Fade from "react-reveal/Fade";

const array = [
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "moi juho",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d",
  "d"
];

class test extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.ylaRef = React.createRef();
  }

  scrollToRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
  scrollToYla = () => window.scrollTo(0, this.ylaRef.current.offsetTop);
  render() {
    const loop = array.map(a => (
      <Fade>
        <h1>{a}</h1>
      </Fade>
    ));

    return (
      <div className="testScreen">
        <button ref={this.ylaRef} onClick={this.scrollToRef}>
          scrollaa lol
        </button>
        {loop}
        <h3 ref={this.myRef}>tänne</h3>
        <button ref={this.myRef} onClick={this.scrollToYla}>
          scrollaa takas lol
        </button>
      </div>
    );
  }
}
export default test;
