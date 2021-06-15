import React from 'react';
import Dashboard from '@app/views/dashboard';
import NotFound from '@app/views/notfound';
import CardPage from '@app/views/cards';
import ChartPage from '@app/views/charts';
import ButtonPage from '@app/views/buttons';
import ColorsPage from '@app/views/colors';

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
        path: '/buttons',
        render: () => <ButtonPage />,
        status: 200,
        uid: 4,
    },
    {
        path: '/colors',
        render: () => <ColorsPage />,
        status: 200,
        uid: 5,
    },
    {
        path: '*',
        render: () => <NotFound />,
        status: 404,
        uid: 404,
    },
];
