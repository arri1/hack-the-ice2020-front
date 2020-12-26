import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login";
import Sellers from "./sellers";
import TableData from "./tableData";
import DisplayGraphs from "./displayGraphs";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/login"} component={Login} />
                <Route path={"/sellers"} component={Sellers} />
                <Route path={"/tableData"} component={TableData} />
                <Route path={"/displayGraphs"} component={DisplayGraphs} />
            </Switch>
        </BrowserRouter>
    );
};
export default Router;
