import React from "react";
import { Card, CardText } from "react-mdl";
import Grow from "@material-ui/core/Grow";
import LeftBox from "./LeftBox";
import MetaTags from "react-meta-tags";

class Juomat extends React.Component {
  render() {
    return (
      <div className="layout">
        <MetaTags>
          <title>Who</title>
          <meta name="description" content="Who made the app" />
        </MetaTags>
        <LeftBox />
        <div className="who">
          <h2 className="smaller_title">Ketä tän teki?</h2>
          <Grow in={true}>
            <Card shadow={6} style={{ minWidth: "300px", margin: "auto" }}>
              <CardText>
                <h3>Karl Lepmets</h3>
                <h3>Wiljam Peltomaa</h3>
                <h4>Teekkarikeksintö 2019</h4>
              </CardText>
            </Card>
          </Grow>
        </div>
      </div>
    );
  }
}

export default Juomat;
