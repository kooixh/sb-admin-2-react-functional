import React from 'react';

export function SimpleHeader(props) {
    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">{props.children}</h1>
        </div>
    );
}

export function ButtonHeader(props) {
    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">{props.children}</h1>
            <a href={props.link} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"/>{props.buttonContent}</a>
        </div>
    );
}
