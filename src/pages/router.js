import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './login'
import Sellers from './sellers'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/login'} component={Login}/>
                <Route path={'/sellers'} component={Sellers}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router
