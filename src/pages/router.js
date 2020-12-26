import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TableData from './tableData';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={TableData}/>
            </Switch>
        </BrowserRouter>
    );
};
export default Router;
