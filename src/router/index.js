import { BrowserRouter} from 'react-router-dom';
import React from 'react'
import AppCart from '~/components/cart';
import AppOrder from '~/components/order';
import AppResult from '~/components/result';
import AppError404 from '~/components/errors/404';
import AppPost from '~/components/post';

const routes = [
    {
        name: "cart",
        path: "/",
        component: AppCart,
        exact: true
    },
    {
        name: "order",
        path: "/order",
        component: AppOrder,
        exact: true
    },
    {
        name: "result",
        path: "/result",
        component: AppResult,
        exact: true
    },
    {
        name: "posts",
        path: "/posts/:num",
        component: AppPost,
        exact: true
    },
    {
        path: "**",
        component: AppError404,
    }
];

const routesMap = {}

routes.forEach((route) => {
    if(route.hasOwnProperty("name"))
    {
        routesMap[route.name] = route.path
    }
})

export { routes, routesMap };