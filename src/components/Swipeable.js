import React from "react";

class Swipeable extends React.Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
  }
  state = {
    touchstartX: "0",
    touchstartY: "0",
    touchendX: "0",
    touchendY: "0"
  };

  componentDidMount() {
    this.element.current.addEventListener(
      "touchstart",
      event => {
        this.setState({
          touchstartX: event.changedTouches[0].screenX,
          touchstartY: event.changedTouches[0].screenY
        });
      },
      false
    );

    this.element.current.addEventListener(
      "touchend",
      event => {
        this.setState({
          touchendX: event.changedTouches[0].screenX,
          touchendY: event.changedTouches[0].screenY
        });
        this.handleSwipe();
      },
      false
    );
  }
  handleSwipe() {
    if (this.state.touchendX < this.state.touchstartX) {
      console.log("Swiped left");

      this.props.handleClick("left");
    } else if (this.state.touchendX > this.state.touchstartX) {
      console.log("Swiped right");

      this.props.handleClick("right");
    }
  }

  componentWillUnmount() {
    //remove event
  }

  render() {
    return <div ref={this.element}>{this.props.children}</div>;
  }
}
export default Swipeable;
