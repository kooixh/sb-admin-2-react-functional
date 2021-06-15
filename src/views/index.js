import React from 'react';
import Dashboard from '@app/views/dashboard';
import NotFound from '@app/views/notfound';
import CardPage from '@app/views/components/cards';
import ChartPage from '@app/views/charts';
import ButtonPage from '@app/views/components/buttons';
import ColorsPage from '@app/views/utilities/colors';
import BordersPage from '@app/views/utilities/borders';
import AnimationPage from '@app/views/utilities/animations';
import OthersPage from '@app/views/utilities/others';

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
        path: '/borders',
        render: () => <BordersPage />,
        status: 200,
        uid: 6,
    },
    {
        path: '/animations',
        render: () => <AnimationPage />,
        status: 200,
        uid: 6,
    },
    {
        path: '/others',
        render: () => <OthersPage />,
        status: 200,
        uid: 7,
    },
    {
        path: '*',
        render: () => <NotFound />,
        status: 404,
        uid: 404,
    },
];
