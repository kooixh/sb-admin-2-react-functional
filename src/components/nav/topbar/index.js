import React from 'react';
import {NavLink} from 'react-bootstrap';

import anonymousPic from '../../../assets/img/undraw_profile.svg';

const {alerts, messages, userActions, user} = require('./topbar.content');

function NavSearchBar() {
    return (
        <form
            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                       aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"/>
                    </button>
                </div>
            </div>
        </form>
    );
}

function SearchDropDown() {
    return (
        <li className="nav-item dropdown no-arrow d-sm-none">
            <NavLink className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-search fa-fw"/>
            </NavLink>
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                 aria-labelledby="searchDropdown">
                <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small"
                               placeholder="Search for..." aria-label="Search"
                               aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </li>
    )
}

function AlertItem({item}) {
    return (
        <a className="dropdown-item d-flex align-items-center" href={item.link}>
        <div className="mr-3">
            <div className={"icon-circle " + item.iconProps}>
                <i className={item.icon}/>
            </div>
        </div>
        <div>
            <div className="small text-gray-500">{item.date}</div>
            <span className="font-weight-bold">{item.message}</span>
        </div>
    </a>)
}

function renderAlertsItems() {
    const alertsComps = [];
    alerts.forEach((item) => {
        alertsComps.push(<AlertItem item={item}/>)
    });
    return alertsComps;
}

function AlertCenter() {
    const alertsComps = renderAlertsItems();
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <NavLink className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bell fa-fw"/>
                <span className="badge badge-danger badge-counter">3+</span>
            </NavLink>
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                 aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">
                    Alerts Center
                </h6>
                {alertsComps}
                <a className="dropdown-item text-center small text-gray-500" href="/alerts">Show All Alerts</a>
            </div>
        </li>
    );
}

function MessageItem({item}) {
    return (
        <a className="dropdown-item d-flex align-items-center" href={item.link}>
            <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={item.picSrc === 'internal' ?  anonymousPic : item.profilePic} alt="..."/>
                <div className={"status-indicator " + item.messageProps}/>
            </div>
            <div className="font-weight-bold">
                <div className="text-truncate">
                    {item.message}
                </div>
                <div className="small text-gray-500">{item.username} · {item.messageTimeAgo}</div>
            </div>
        </a>
    )
}

function renderMessages() {
    const mess = [];
    messages.forEach((item) => {
        mess.push(<MessageItem item={item}/>)
    });
    return mess;
}

function MessageCenter() {
    const messagesComp = renderMessages();
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <NavLink className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-envelope fa-fw"/>
                <span className="badge badge-danger badge-counter">7</span>
            </NavLink>

            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                 aria-labelledby="messagesDropdown">
                <h6 className="dropdown-header">
                    Message Center
                </h6>
                {messagesComp}

                <a className="dropdown-item text-center small text-gray-500" href="/messages">Read More Messages</a>
            </div>
        </li>
    )
}

function DropdownDivider() {
    return (
        <div className="dropdown-divider"/>
    )
}

function UsernameAction({item}) {
    return (
        <a className="dropdown-item" href={item.link}>
            <i className={item.icon}/>
            {item.title}
        </a>
    )
}

function renderUserAction() {
    const actions = [];
    userActions.forEach((item) => {
        actions.push(<UsernameAction item={item}/>)
    });
    return actions;
}

function UsernameItem(props) {
    const actions = renderUserAction();
    return (
        <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{props.user.name}</span>
                <img className="img-profile rounded-circle" src={props.user.picSrc === 'internal' ?
                    anonymousPic : props.user.profilePic} alt="profile"/>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                 aria-labelledby="userDropdown">
                {actions}
                <DropdownDivider/>
                <a className="dropdown-item" href="/logout" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>
                    Logout
                </a>
            </div>
        </li>
    );
}

function NavTopbar() {

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"/>
            </button>

            <NavSearchBar/>

            <ul className="navbar-nav ml-auto">

                <SearchDropDown/>
                <AlertCenter/>
                <MessageCenter/>

                <div className="topbar-divider d-none d-sm-block"/>

                <UsernameItem user={user}/>
            </ul>

        </nav>
    )

}

export default NavTopbar;
