import React from 'react'
import { Card, CardText } from "react-mdl"
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';

var randomNro = 0
var randomLkm = 1
class Ruletti extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };
    state = {
        drinks: [],
        clicked: false,
        transition: false,
        newTitle: "",
        newUrl: ""
    };

    componentDidMount() {
        axios.get('http://194.76.224.25:3004/drinks')
            .then(res => {
                this.setState({ drinks: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleClick() {
        this.setState({ clicked: true });
        //this.setState({ transition: !this.state.transition })
        if (this.state.drinks === undefined || this.state.drinks.length === 0) {
        }
        else {
            randomNro = Math.floor(Math.random() * this.state.drinks.length)
            var num = Math.random();

            if (num < 0.7) {
                randomLkm = "1x"
            }
            else if (num > 0.7 && num < 0.9) {
                randomLkm = "2x"
            }
            else if (num > 0.9) {
                randomLkm = "3x"
            }
        }
    }

    render() {
        if (this.state.clicked) {
            return (
                <div>
                    <h1 className="title">Drinkkiruletti</h1>
                    <Zoom in={true} timeout={250}>
                        <Card shadow={6} className="perus" style={{ minWidth: '300px', margin: 'auto', opacity: 0.92, borderRadius: '20px' }} onClick={this.handleClick}>
                            <CardText>
                                <div>
                                    {this.state.drinks === undefined || this.state.drinks.length === 0 ? (
                                        <div>Loading...</div>
                                    ) : (
                                            <div>
                                                <h3 style={{ color: 'black', fontSize: '40px' }}>{randomLkm}</h3>
                                                <img src={this.state.drinks[randomNro].url}
                                                    alt={this.state.drinks[randomNro].title} className="juoma-img"></img>
                                                <h3 style={{ color: 'black' }}>
                                                    {this.state.drinks[randomNro].title}
                                                </h3>
                                            </div>
                                        )}
                                </div>
                            </CardText>
                        </Card>
                    </Zoom>
                </div >
            )
        }
        else {
            return (
                <div>
                    <Zoom in={true} timeout={800}>
                        <h1 className="title">Drinkkiruletti</h1>
                    </Zoom>
                    {setTimeout(function () {
                        this.setState({ transition: true });
                    }.bind(this), 700)}
                    <Fade in={this.state.transition} timeout={500}>
                        <h4 className="smaller_title">Paina ruutua aloittaaksesi!</h4>
                    </Fade>
                    <div style={{ width: "100%", height: "100%", position: "absolute", top: "0", left: "0" }} onClick={this.handleClick}>
                    </div>
                </div>
            )
        }
    }
}

export default Ruletti