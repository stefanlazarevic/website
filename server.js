import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import compression from 'compression';

import { StaticRouter, matchPath } from 'react-router';
import pageHTML from './index.html';
import AppRouter from './src/AppRouter';
import AppRoutes from './src/constants/AppRoutes';
import routes from './src/constants/AppRoutes';
import NotFoundPage from './src/pages/errors/404.page';

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(express.static('build/public'));

const PORT = process.env.PORT || 9000;

app.get('*', (request, response) => {
    let status = 200;
    const activeRoute = routes.find(route => matchPath(request.url.toLowerCase(), route));
    const context = {};

    if (activeRoute.path === '/**') {
        status = 404;
    }

    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={request.url} context={context}>
            <AppRouter />
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    response.status(status).send(pageHTML({
        style: helmet.style.toString(),
        links: helmet.link.toString(),
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        body: markup
    }));
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
