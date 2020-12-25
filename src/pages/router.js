import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login";
import Sellers from "./sellers";
import TableData from "./tableData";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/login"} component={Login} />
                <Route path={"/sellers"} component={Sellers} />
                <Route path={"/tableData"} component={TableData} />
            </Switch>
        </BrowserRouter>
    );
};
export default Router;
