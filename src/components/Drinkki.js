import React from "react";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import Slide from "@material-ui/core/Slide";
import Img from "react-image";

class drinkki extends React.Component {
  state = {
    slideIn: true,
    props: this.props
  };

  componentWillReceiveProps() {
    this.setState({ slideIn: false });
  }

  componentDidUpdate() {
    if (this.state.slideIn === false) {
      setTimeout(
        function() {
          this.setState({
            slideIn: true,
            props: this.props
          });
        }.bind(this),
        700
      );
    }
  }
  render() {
    return (
      <Card className="kortti">
        {this.props.drink === undefined ? (
          <CircularProgress style={{ top: "50%" }}>
            <h3>Loading...</h3>
          </CircularProgress>
        ) : (
          <div>
            <Slide
              in={this.state.slideIn}
              direction={this.state.slideIn ? "right" : "left"}
              timeout={500}
            >
              <h4>{this.state.props.lkm}</h4>
            </Slide>
            <Slide
              in={this.state.slideIn}
              direction={this.state.slideIn ? "left" : "right"}
              timeout={500}
            >
              <div>
                <Img
                  src={this.state.props.drink.url}
                  alt={this.state.props.drink.title}
                  className="kortti-img"
                  loader={
                    <CircularProgress
                      style={{
                        top: "50%",
                        position: "absolute",
                        display: "block",
                        left: "44%"
                      }}
                    />
                  }
                />
              </div>
            </Slide>
            <Slide
              in={this.state.slideIn}
              direction={this.state.slideIn ? "right" : "left"}
              timeout={500}
            >
              <h3>{this.state.props.drink.title}</h3>
            </Slide>
          </div>
        )}
      </Card>
    );
  }
}

export default drinkki;
