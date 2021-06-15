import React from 'react';
import {NavLink} from 'react-bootstrap';

const {compItem, utilItem, pageItems} = require('./sidebar.content');

function renderCollapseItemLink(collapseLinks) {
    const links = [];
    collapseLinks.forEach((link) => {
        links.push(<a className="collapse-item" href={link.href}>{link.title}</a>);
    });
    return links;

}

function renderCollapseItems(item) {

    const collapseLinks = renderCollapseItemLink(item.collapseItems);

    return (
        <li className="nav-item">
            <NavLink className="nav-link collapsed" data-toggle="collapse" data-target={"#" + item.collapseName}
               aria-expanded="true" aria-controls="collapseTwo">
                <i className={item.icon}/>
                <span>{item.title}</span>
            </NavLink>
            <div id={item.collapseName} className="collapse" aria-labelledby={item.collapseHeadingName}
                 data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">{item.collapseTitle}:</h6>
                    {collapseLinks}
                </div>
            </div>
        </li>
    );
}

function SidebarHeading(props) {
    return (
        <div className="sidebar-heading">
            {props.heading}
        </div>
    );
}

function CollapseSideBarItem(props) {
    return renderCollapseItems(props.items);
}

function SidebarDivider(props) {
    return (
        <hr className={"sidebar-divider " + props.border}/>
    );
}

function SidebarHome() {
    return (
        <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"/>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </NavLink>
    );
}

function SidebarStandardItem(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.href}>
                <i className={props.icon}/>
                <span>{props.title}</span></a>
        </li>
    );
}

export function NavSidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <SidebarHome/>
            <SidebarDivider border="my-0"/>
            <SidebarStandardItem icon="fas fa-fw fa-tachometer-alt" href="/" title="Dashboard"/>
            <SidebarDivider/>
            <SidebarHeading heading="Interface"/>
            <CollapseSideBarItem items={compItem}/>
            <CollapseSideBarItem items={utilItem}/>

            <SidebarDivider/>

            <SidebarHeading heading="Addons"/>

            <CollapseSideBarItem items={pageItems}/>

            <SidebarStandardItem icon="fas fa-fw fa-chart-area" href="/charts" title="Charts"/>
            <SidebarStandardItem icon="fas fa-fw fa-chart-area" href="/tables" title="Tables"/>

            <SidebarDivider/>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"/>
            </div>

        </ul>
    );
}


