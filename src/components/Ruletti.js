import React from "react";
import { Card, CardText, ProgressBar } from "react-mdl";
import Zoom from "@material-ui/core/Zoom";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import DrawerBox from "./DrawerBox";
import Popup from "./Popup";

var randomNro = 0;
var randomLkm = 1;
class Ruletti extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    drinks: [],
    clicked: false,
    transition: false,
    newTitle: "",
    newUrl: ""
  };

  componentDidMount() {
    axios
      .get("http://194.76.224.25:3004/drinks")
      .then(res => {
        this.setState({ drinks: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick() {
    this.setState({ clicked: true });
    if (this.state.drinks === undefined || this.state.drinks.length === 0) {
    } else {
      randomNro = Math.floor(Math.random() * this.state.drinks.length);
      var num = Math.random();

      if (num < 0.7) {
        randomLkm = "1x";
      } else if (num > 0.7 && num < 0.9) {
        randomLkm = "2x";
      } else if (num > 0.9) {
        randomLkm = "3x";
      }
    }
  }

  render() {
    if (this.state.clicked) {
      return (
        <div className="layout">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <DrawerBox />
            <Popup />
          </div>
          <h1 className="title" style={{ margin: "0px" }}>
            Drinkkiruletti
          </h1>
          <Zoom in={true} timeout={250}>
            <Card
              shadow={6}
              className="perus"
              style={{
                minWidth: "300px",
                margin: "auto",
                opacity: 0.92,
                borderRadius: "20px",
                marginTop: "10px"
              }}
              onClick={this.handleClick}
            >
              <CardText>
                <div>
                  {this.state.drinks === undefined ||
                  this.state.drinks.length === 0 ? (
                    <ProgressBar indeterminate />
                  ) : (
                    <div style={{ color: "black" }}>
                      <h3 style={{ fontSize: "40px" }}>{randomLkm}</h3>
                      <img
                        src={this.state.drinks[randomNro].url}
                        alt={this.state.drinks[randomNro].title}
                        className="juoma-img"
                      />
                      <h3>{this.state.drinks[randomNro].title}</h3>
                    </div>
                  )}
                </div>
              </CardText>
            </Card>
          </Zoom>
        </div>
      );
    } else {
      setTimeout(
        function() {
          this.setState({ transition: true });
        }.bind(this),
        700
      );
      return (
        <div className="layout">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <DrawerBox />
            <Popup />
          </div>
          <Zoom in={true} timeout={800}>
            <h1 className="title" style={{ margin: "0px" }}>
              Drinkkiruletti
            </h1>
          </Zoom>
          <Fade in={this.state.transition} timeout={500}>
            <h4 className="smaller_title">Paina ruutua aloittaaksesi!</h4>
          </Fade>
          <div
            style={{
              width: "100%",
              height: "70vh",
              position: "absolute"
            }}
            onClick={this.handleClick}
          />
        </div>
      );
    }
  }
}

export default Ruletti;
