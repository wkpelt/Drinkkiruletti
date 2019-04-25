import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Ruletti from './Ruletti'
import Juomat from './Juomat'
import Who from './Who'

const Main = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={Ruletti} />
            <Route path={"/juomat"} component={Juomat} />
            <Route path={"/who"} component={Who} />
        </Switch>
    )
}

export default Main