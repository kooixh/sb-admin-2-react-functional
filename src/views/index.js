import React from "react";
import Dashboard from "@app/views/dashboard/dashboard";
import NotFound from '@app/views/notfound';


export const routes = [
    {
        path: '/',
        render: () => <Dashboard />,
        status: 200,
        uid: 1,
    },
    {
        path: '*',
        render: () => <NotFound />,
        status: 404,
        uid: 5,
    },
];
