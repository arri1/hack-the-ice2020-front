import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import Login from './login'

const Router = () => {
    return (
        <Router>
            <Switch>
                <Route path={'login'} component={Login}/>
            </Switch>
        </Router>
    )
}
export default Router
