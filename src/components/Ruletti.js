import React from 'react'
import { Card, CardText } from "react-mdl"

class Ruletti extends React.Component {
    render() {
        return (
            <div style={{ height: '90vh' }} className="perus">
                <img src="https://images.alko.fi/images/cs_srgb,f_auto,t_large/cdn/103824/suomi-viina-muovipullo.jpg" alt="juoma" className="juoma-img" />
                <h3>Drinkkiruletti</h3>
                <Card shadow={10} style={{ minWidth: '300px', margin: 'auto' }}>
                    <CardText>
                        viinaa
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default Ruletti