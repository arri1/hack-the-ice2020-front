import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './login'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/login'} component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router
