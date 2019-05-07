import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

import LeftBox from "./LeftBox";
import MetaTags from "react-meta-tags";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "@material-ui/core/Card";
import Slide from "@material-ui/core/Slide";

import Input from "@material-ui/core/Input";
import InputBase from "@material-ui/core/InputBase";

import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";

function Transition(props) {
  return <Slide direction="left" {...props} />;
}

const styles = {
  root: { backgroundColor: "rgba(0, 0, 0, 0.80)" },

  paper: {
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "none",
    overflow: "hidden"
  },
  cssNo: {
    color: "white",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "red"
    },
    fontSize: "16px",
    boxShadow: "0px 0px 1px 1px #000000",
    margin: "10px",
    width: "40px"
  },
  cssYes: {
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "green"
    },
    fontSize: "16px",
    boxShadow: "0px 0px 1px 1px #000000",
    margin: "10px",
    width: "40px"
  }
};

class Juomat extends React.Component {
  state = {
    drinks: [],
    newTitle: "",
    newUrl: "",
    drinkQualified: false
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

  handleTitleChange = event => {
    this.setState({ newTitle: event.target.value });
  };

  handleURLChange = event => {
    this.setState({ newUrl: event.target.value });
  };

  handleClose = () => {
    this.setState({ drinkQualified: false });
  };

  checkDrink = event => {
    event.preventDefault();
    console.log(this.state.newUrl);

    const isHTTP = this.state.newUrl.includes("http");

    if (this.state.newTitle.length === 0) {
      return alert("Tietoa puuttuu!");
    } else if (!isHTTP) {
      this.setState({ newUrl: "" });
      return alert("Anna kelvollinen URL!");
    } else if (this.state.newTitle.length > 20) {
      this.setState({ newTitle: "" });
      return alert("Hieman lyhyempi nimi kiitos!");
    } else {
      this.setState({ drinkQualified: true });
    }
  };

  addDrink = () => {
    const drink = {
      id: this.state.drinks.length + 1,
      title: this.state.newTitle,
      url: this.state.newUrl
    };

    axios.post("http://194.76.224.25:3004/drinks", drink).then(response => {
      this.setState({
        drinks: this.state.drinks.concat(response.data),
        newTitle: "",
        newUrl: ""
      });
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="layout">
        <MetaTags>
          <title>Juomat</title>
          <meta name="description" content="Add drinks" />
        </MetaTags>
        <LeftBox />
        <div className="perus">
          <h3 className="smaller_title">Lisää juomia tästä</h3>
          <form onSubmit={this.checkDrink}>
            <Card className="kortti" id="samplekortti">
              <div>
                <h4>
                  <Input
                    value={this.state.newUrl}
                    onChange={this.handleURLChange}
                    placeholder="Kuva juomasta (URL)"
                    fullWidth={true}
                    inputProps={{
                      style: { textAlign: "center" }
                    }}
                  />
                </h4>

                <img src={this.state.newUrl} alt="" className="kortti-img" />
                <h3>
                  <InputBase
                    value={this.state.newTitle}
                    onChange={this.handleTitleChange}
                    placeholder="Juoman nimi"
                    fullWidth={true}
                    inputProps={{
                      style: {
                        textAlign: "center",
                        fontSize: "28px"
                      }
                    }}
                  />
                </h3>
              </div>
            </Card>
            <div>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: "10px" }}
              >
                Lisää
              </Button>
              <Dialog
                BackdropProps={{
                  classes: {
                    root: classes.root
                  }
                }}
                PaperProps={{
                  classes: {
                    root: classes.paper
                  }
                }}
                open={this.state.drinkQualified}
                onClose={this.handleClose}
                fullScreen={true}
                TransitionComponent={Transition}
                keepMounted
              >
                <DialogContent>
                  <Card className="kortti" id="samplekortti">
                    <div>
                      <h4>Näyttääkö hyvältä?</h4>
                      <img
                        src={this.state.newUrl}
                        alt=""
                        className="kortti-img"
                      />
                      <h3>{this.state.newTitle}</h3>
                    </div>
                  </Card>
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex"
                    }}
                  >
                    <Button
                      onClick={() => {
                        this.handleClose();

                        this.setState({
                          newTitle: "",
                          newUrl: ""
                        });
                      }}
                      variant="contained"
                      className={classNames(classes.cssNo)}
                    >
                      Ei
                    </Button>
                    <Button
                      onClick={() => {
                        this.handleClose();
                        this.addDrink();
                      }}
                      variant="contained"
                      className={classNames(classes.cssYes)}
                      autoFocus
                    >
                      Kyllä
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Juomat);
