import React from 'react';
import axios from 'axios';

class Juomat extends React.Component {
    state = {
        drinks: [],
        newTitle: "",
        newUrl: ""
    };

    componentDidMount() {
        axios.get('http://194.76.224.25:3004/drinks')
            .then(res => {
                console.log(res);
                this.setState({ drinks: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleTitleChange = (event) => {
        this.setState({ newTitle: event.target.value })
    }

    handleURLChange = (event) => {
        this.setState({ newUrl: event.target.value })
    }

    addDrink = (event) => {
        event.preventDefault()

        const isHTTP = this.state.newTitle.includes("http")

        if (this.state.newTitle.length === 0) {
            return alert("Tietoa puuttuu!")
        }
        else if (!isHTTP) {
            this.setState({ newUrl: '' })
            return alert("Anna kelvollinen URL!")
        }

        const drink = {
            id: this.state.drinks.length + 1,
            title: this.state.newTitle,
            url: this.state.newUrl
        }

        axios.post('http://194.76.224.25:3004/drinks', drink)
            .then(response => {
                console.log(response)
                this.setState({
                    drinks: this.state.drinks.concat(response.data),
                    newTitle: "",
                    newUrl: ""
                })
            })
    }


    render() {
        return (
            <div className="perus">
                <h3>
                    Lisää juomia tästä
                </h3>
                <form onSubmit={this.addDrink}>
                    <div>
                        <input value={this.state.newTitle} onChange={this.handleTitleChange} placeholder="Juoman nimi" />
                    </div>
                    <div>
                        <input value={this.state.newUrl} onChange={this.handleURLChange} placeholder="Kuva juomasta (URL)" />
                    </div>
                    <br>
                    </br>
                    <div>
                        <button type="submit">Lisää</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Juomat