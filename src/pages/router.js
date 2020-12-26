import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TableData from './tableData';
import Home from './home';
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={TableData} />
                <Route exact path={'/home'} component={Home} />
            </Switch>
        </BrowserRouter>
    );
};
export default Router;
