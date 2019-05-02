import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button style={{ fontSize: "24px" }} onClick={this.handleOpen}>
          ?
        </Button>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div className={classes.paper}>
            <Typography variant="h6">
              Painamalla ruutua, algoritmi arpoo sinulle satunnaisen määrän,
              satunnaista juomaa.
            </Typography>
            <Typography variant="subtitle1">
              <br />
              <li>1x – 60% todennäköisyys</li>
              <li>2x – 30% todennäköisyys</li>
              <li>3x – 10% todennäköisyys</li>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

const Popup = withStyles(styles)(SimpleModal);

export default Popup;
