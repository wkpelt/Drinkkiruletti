import React from 'react'
import { Card, CardText } from "react-mdl"

class Juomat extends React.Component {
    render() {
        return (
            <div className="perus">

                <h3>Ketä tän teki</h3>
                <Card shadow={5} style={{ minWidth: '300px', margin: 'auto' }}>
                    <CardText>
                        <h3>Karl Lepmets</h3>
                        <h3>Wiljam Peltomaa</h3>
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default Juomat