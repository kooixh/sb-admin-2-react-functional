import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {NavSidebar} from "@app/components/nav/sidebar/nav.sidebar";
import NavTopbar from "@app/components/nav/topbar/nav.topbar";
import { routes } from '@app/views';

function generateRoutes() {
    const routesRouter = [];
    routes.forEach((elem) => {
        routesRouter.push(<Route exact path={elem.path} render={elem.render} key={elem.uid} status={elem.status} />);
    });
    return routesRouter;
}

function Main() {
    const routers = generateRoutes();
    return (
        <div id="wrapper">
            <Router>
                <NavSidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavTopbar/>
                        <Switch>{routers}</Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default Main;
