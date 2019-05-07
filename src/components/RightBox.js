import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "./media/menu.svg";
import AboutMe from "./media/aboutme.png";
import Projects from "./media/projects.png";
import Resume from "./media/cv.png";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

class RightBox extends React.Component {
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const pages = ["/aboutme", "/projects", "/resume"];

    const icons = [AboutMe, Projects, Resume];

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
                    style={{ textAlign: "center", fontSize: "20px" }}
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
          {["About me", "Projects", "Resume"].map((text, index) => (
            <Link to={pages[index]} key={text}>
              <ListItem button>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography type="body2" style={{ fontSize: "20px" }}>
                      <img
                        src={icons[index]}
                        alt={text}
                        style={{ maxWidth: "32px", marginRight: "6px" }}
                      />
                      {text}
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <IconButton
          onClick={this.toggleDrawer("right", true)}
          style={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px" }}
        >
          About
          <img src={MenuIcon} alt="" />
        </IconButton>

        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
          style={{ opacity: 0.98 }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default RightBox;
