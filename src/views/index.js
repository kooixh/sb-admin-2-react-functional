import React from 'react';
import Dashboard from '@app/views/dashboard';
import NotFound from '@app/views/notfound';
import CardPage from '@app/views/cards';
import ChartPage from '@app/views/charts';


export const routes = [
    {
        path: '/',
        render: () => <Dashboard />,
        status: 200,
        uid: 1,
    },
    {
        path: '/cards',
        render: () => <CardPage />,
        status: 200,
        uid: 2,
    },
    {
        path: '/charts',
        render: () => <ChartPage />,
        status: 200,
        uid: 3,
    },
    {
        path: '*',
        render: () => <NotFound />,
        status: 404,
        uid: 404,
    },
];
