import React from "react";

import {NavSidebar} from "@app/components/nav/sidebar/nav.sidebar";
import NavTopbar from "@app/components/nav/topbar/nav.topbar";
import Dashboard from "@app/views/dashboard/dashboard";

function Main() {
    return (
        <div id="wrapper">
            <NavSidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <NavTopbar/>
                    <Dashboard/>
                </div>
            </div>
        </div>
    );
}

export default Main;
