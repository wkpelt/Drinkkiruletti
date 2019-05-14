import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "./media/menu.svg";
import RulettiIcon from "./media/0.png";
import JuomatIcon from "./media/1.png";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ViLLEBot from "./media/villebot.png";

class LeftBox extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = open => () => {
    this.setState({
      left: open
    });
  };

  render() {
    const pages = ["/drinkkiruletti", "/drinkkiruletti/juomat", "/villebot"];

    const icons = [RulettiIcon, JuomatIcon, ViLLEBot];

    const sideList = (
      <div>
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    type="body2"
                    style={{ textAlign: "center", fontSize: "24px" }}
                  >
                    Epi.fi
                  </Typography>
                }
              />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {["Drinkkiruletti", "Juomat", "ViLLEBot"].map((text, index) => (
            <Link
              to={pages[index]}
              key={text + index}
              target={text === "ViLLEBot" ? "_blank" : ""}
            >
              <ListItem button>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography type="body2" style={{ fontSize: "20px" }}>
                      <img
                        src={icons[index]}
                        alt={text}
                        style={{ width: "32px", margin: "6px" }}
                      />
                      {text}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />
            </Link>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <IconButton
          onClick={this.toggleDrawer(true)}
          style={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px" }}
        >
          <img src={MenuIcon} alt="" />
          Apps
        </IconButton>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer(false)}
          style={{ opacity: 0.98 }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default LeftBox;
