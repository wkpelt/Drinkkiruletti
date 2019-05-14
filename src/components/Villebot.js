import React from "react";
import userselect from "./media/slides/userselect.png";
import video from "./media/slides/video.mp4";
import bottigui from "./media/slides/bottigui.gif";

const Slide1 = (
  <div>
    <h1 style={{ fontSize: "100px" }}>ViLLEBot</h1>
    <h2>Wiljam Peltomaa</h2>
    <h3>TKO_8971: Soveltuva projekti 2019</h3>
  </div>
);
const Slide2 = (
  <div>
    <h1 style={{ fontSize: "80px" }}>Niin mikä?</h1>
    <h3>- “Botti” ViLLE-oppimisympäristöön</h3>
    <h3>- Monivalintatehtäviin</h3>
    <h3>- Tehtäviin joissa vastaus on numero</h3>
    <h3>- Tallentaa vastaukset tekstitiedostoon</h3>
  </div>
);
const Slide3 = (
  <div>
    <h1>Käytetyt teknologiat ja moduulit</h1>
    <div style={{ fontSize: "250%" }}>
      <li style={{ marginBottom: "5%" }}>Python</li>
      <li style={{ marginBottom: "5%" }}>pysimplegui</li>
      <li style={{ marginBottom: "5%" }}>pyautogui</li>
      <li style={{ marginBottom: "5%" }}>pyscreeze</li>
      <li style={{ marginBottom: "5%" }}>pillow</li>
      <li style={{ marginBottom: "5%" }}>pyperclip</li>
    </div>
  </div>
);
const Slide4 = (
  <div>
    <h1>Ongelmat</h1>
    <h3>- ViLLE ei pysy mukana jos liian nopea</h3>
    <h4 style={{ textAlign: "center" }}> --> menettää yhteyden</h4>
    <h3>- 4 arvausta/s maksiminopeus.</h3>
  </div>
);
const Slide5 = (
  <div>
    <h1>Kehitysideoita bottiin/ViLLEen</h1>
    <h3>- Botille OpenCV moduuli, tekoäly joka tunnistaa tekstin mistä vain</h3>
    <h3> - ViLLEEn yksinkertainen: </h3>
    <img src={userselect} alt="" />
    <h3>Estäisi tekstin kopioimisen ruudulta. (Ei estäisi OpenCVtä)</h3>
    <h4>
      Ville ei teoriassa ikinä voi päästä eroon boteista, jollei se ota pois
      rajattomia arvausyrityksiä.
    </h4>
  </div>
);

class Villebot extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    num: 0,
    kuva: bottigui
  };

  handleClick() {
    if (this.state.num < 5) {
      this.setState({ num: this.state.num + 1 });
    } else {
      this.setState({ num: 0 });
    }
  }

  render() {
    const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];
    if (this.state.num === 5) {
      return (
        <div
          onClick={this.handleClick}
          className="villebot"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            overflow: "auto"
          }}
        >
          <center style={{ marginTop: "50px" }}>
            <video controls>
              <source src={video} type="video/mp4" />
            </video>
          </center>
        </div>
      );
    } else {
      return (
        <div
          onClick={this.handleClick}
          className="villebot"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            overflow: "auto"
          }}
        >
          <div className="onMobile">
            Sorry, page not supported for mobile devices!
          </div>
          <div style={{ float: "right" }} className="presentation">
            {slides[this.state.num]}
          </div>
          <div style={{ float: "left" }} className="presentationL">
            <img src={this.state.kuva} alt="" />
          </div>
        </div>
      );
    }
  }
}

export default Villebot;
