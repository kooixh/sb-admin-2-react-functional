import React from "react";
import Dashboard from "@app/views/dashboard/dashboard";

export const routes = [
    {
        path: '/',
        render: () => <Dashboard />,
        status: 200,
        uid: 1,
    }
];
