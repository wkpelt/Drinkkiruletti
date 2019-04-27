import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

class Juomat extends React.Component {
  state = {
    drinks: [],
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

  handleTitleChange = event => {
    this.setState({ newTitle: event.target.value });
  };

  handleURLChange = event => {
    this.setState({ newUrl: event.target.value });
  };

  addDrink = event => {
    event.preventDefault();
    console.log(this.state.newUrl);

    const isHTTP = this.state.newUrl.includes("http");

    if (this.state.newTitle.length === 0) {
      return alert("Tietoa puuttuu!");
    } else if (!isHTTP) {
      this.setState({ newUrl: "" });
      return alert("Anna kelvollinen URL!");
    }

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
      <div className="perus">
        <h3 className="smaller_title">Lisää juomia tästä</h3>
        <form onSubmit={this.addDrink}>
          <div>
            <input
              value={this.state.newTitle}
              onChange={this.handleTitleChange}
              placeholder="Juoman nimi"
            />
          </div>
          <div>
            <input
              value={this.state.newUrl}
              onChange={this.handleURLChange}
              placeholder="Kuva juomasta (URL)"
            />
          </div>
          <br />
          <div>
            <Button type="submit" variant="contained">
              Lisää
            </Button>
          </div>
        </form>
        <div>
          <h4>
            Tällä hetkellä {this.state.drinks.length} juomaa tietokannassamme!
          </h4>
        </div>
      </div>
    );
  }
}

export default Juomat;
