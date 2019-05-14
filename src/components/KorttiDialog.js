import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "@material-ui/core/Card";
import Slide from "@material-ui/core/Slide";
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

class korttiDialog extends React.Component {
  render() {
    const { classes } = this.props;
    return (
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
        open={this.props.drinkQualified}
        onClose={this.props.handleClose}
        fullScreen={true}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogContent>
          <Card className="kortti" id="samplekortti">
            <div>
              <h4>Näyttääkö hyvältä?</h4>
              <img src={this.props.newUrl} alt="" className="kortti-img" />
              <h3>{this.props.newTitle}</h3>
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
                this.props.handleClose();

                this.props.handleDialog();
              }}
              variant="contained"
              className={classNames(classes.cssNo)}
            >
              Ei
            </Button>
            <Button
              onClick={() => {
                this.props.handleClose();
                this.props.addDrink();
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
    );
  }
}
export default withStyles(styles)(korttiDialog);
