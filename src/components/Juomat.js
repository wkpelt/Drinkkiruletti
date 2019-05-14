import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import LeftBox from "./LeftBox";
import MetaTags from "react-meta-tags";
import Card from "@material-ui/core/Card";
import Upload from "./Upload";

import Input from "@material-ui/core/Input";
import InputBase from "@material-ui/core/InputBase";

import KorttiDialog from "./KorttiDialog";

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

  handler = val => {
    this.setState({
      newUrl: val
    });
  };

  handleDialog = () => {
    this.setState({
      newTitle: "",
      newUrl: ""
    });
  };

  checkDrink = event => {
    event.preventDefault();

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
                    className="urli"
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
              <div
                style={{
                  justifyContent: "grid",
                  display: "center",
                  margin: "10px",
                  marginBottom: "0px"
                }}
              >
                <KorttiDialog
                  handleDialog={this.handleDialog}
                  handleClose={this.handleClose}
                  drinkQualified={this.state.drinkQualified}
                  newUrl={this.state.newUrl}
                  newTitle={this.state.newTitle}
                  addDrink={this.addDrink}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Lisää
                </Button>
                <Upload handler={this.handler} />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Juomat;
