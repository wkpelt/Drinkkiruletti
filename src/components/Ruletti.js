import React from "react";
import Zoom from "@material-ui/core/Zoom";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import LeftBox from "./LeftBox";
import Popup from "./Popup";
import MetaTags from "react-meta-tags";
import Drinkki from "./Drinkki";

class Ruletti extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.randomNro = 0;
    this.randomLkm = 1;

    setTimeout(
      function() {
        this.setState({ transition: true });
      }.bind(this),
      700
    );
  }
  state = {
    drinks: [],
    gameStarted: false,
    transition: false
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
    this.setState({ gameStarted: true });
    if (this.state.drinks.length !== undefined) {
      this.randomNro = Math.floor(Math.random() * this.state.drinks.length);

      var num = Math.random();
      if (num < 0.7) {
        this.randomLkm = "1x";
      } else if (num > 0.7 && num < 0.9) {
        this.randomLkm = "2x";
      } else if (num > 0.9) {
        this.randomLkm = "3x";
      }
    }
  }

  render() {
    return (
      <div className="layout">
        <MetaTags>
          <title>Drinkkiruletti</title>
          <meta name="description" content="Rollaa itsellesi juoma!" />
        </MetaTags>
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <LeftBox />
          <Popup sum={this.state.drinks.length} />
        </div>
        <div onClick={this.handleClick}>
          <Zoom in={true} timeout={800}>
            <h1 className="title" style={{ margin: "0px" }}>
              Drinkkiruletti
            </h1>
          </Zoom>
          <div
            className="drinkki"
            style={{
              width: "100%",
              height: "70vh",
              position: "absolute"
            }}
            onClick={this.handleClick}
          />
          {this.state.gameStarted !== true ? (
            <div>
              <Fade in={this.state.transition} timeout={500}>
                <h4 className="smaller_title">Paina ruutua aloittaaksesi!</h4>
              </Fade>
            </div>
          ) : (
            <Drinkki
              drink={this.state.drinks[this.randomNro]}
              lkm={this.randomLkm}
              ref={this.drinkElement}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Ruletti;
