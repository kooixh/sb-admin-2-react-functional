import React from "react";

export function EmptyCard(props) {
    return (
        <div className={"card shadow " + props.colour + " " + props.textColour}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}
export function SmallCard(props) {
    return (
        <div className={"card shadow h-100 py-2 " + props.status}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className={"text-xs font-weight-bold text-uppercase mb-1 " + props.statusText}>
                            {props.cardHeader}
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.children}</div>
                        {props.extraContent}
                    </div>
                    <div className="col-auto">
                        <i className={props.icon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function DefaultCard(props) {
    return (
        <div className="card mb-4">
            <div className="card-header">
                {props.cardHeader}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export function BasicCard(props) {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">{props.cardHeader}</h6>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

function renderDropdownItems(items) {
    const dropdownItems = [];
    items.forEach((item) => {
        if (item.type === 'link')
            dropdownItems.push(<a className="dropdown-item" href={item.link}>{item.title}</a>);
        else if (item.type === 'divider')
            dropdownItems.push(<div className="dropdown-divider"/>);
    });
    return dropdownItems;
}

function CardDropdownItem({items}) {
    const dropdownItems = renderDropdownItems(items);
    return (
        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
             aria-labelledby="dropdownMenuLink">
            {dropdownItems}
        </div>
    )
}

export function DropdownCard(props) {
    const dropdownItems = renderDropdownItems(props.items);
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">{props.cardHeader}</h6>
                <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                        <div className="dropdown-header">{props.dropdownHeader}</div>
                        {dropdownItems}
                    </div>
                </div>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export function CollapseCard(props) {
    return (
        <div className="card shadow mb-4">
            <a href={'#' + props.collapseId} className="d-block card-header py-3" data-toggle="collapse"
               role="button" aria-expanded="true" aria-controls="collapseCardExample">
                <h6 className="m-0 font-weight-bold text-primary">{props.cardHeader}</h6>
            </a>
            <div className="collapse show" id={props.collapseId}>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
