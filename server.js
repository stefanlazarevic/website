require('dotenv').config();
import 'babel-polyfill';

/**
 * Node.js + Express
 */
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

/**
 * React
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import Helmet from 'react-helmet';

/**
 * Application
 */
import pageHTML from './index.html';
import AppRouter from './src/AppRouter';
import AppRoutes from './src/constants/AppRoutes';
import routes from './src/constants/AppRoutes';
import NotFoundPage from './src/pages/errors/404.page';

/**
 * Declaring constants.
 */
const PORT = process.env.APP_PORT || 80;
const PORT_SSL = process.env.APP_PORT_SSL || 8443;
const app = express();

// const options = {
//     key: fs.readFileSync(path.join(process.cwd(), `/build/ssl/${process.env.APP_DOMAIN}.key`), 'utf8'),
//     cert: fs.readFileSync(path.join(process.cwd(), `/build/ssl/${process.env.APP_DOMAIN}.csr`), 'utf8'),
// }

app.use(compression());
app.use(bodyParser.json());

app.use(function (req, res, next) {
    const pathParts = req.url.split('.');
    const requestedExtension = pathParts[pathParts.length - 1];

    if (requestedExtension === 'html' || requestedExtension === 'htm') {
        pathParts.pop();
        req.url = pathParts.join('');
    }

    next();
});

app.use(express.static('build/public'));

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

    response.charset = 'UTF-8';
    response.status(status).send(pageHTML({
        style: helmet.style.toString(),
        links: helmet.link.toString(),
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        body: markup
    }));
});

http.createServer(app).listen(PORT, () => {
    console.log(`HTTP Server is now running on port: ${PORT}`);
});

// https.createServer(options, app).listen(PORT_SSL, () => {
//     console.log(`HTTPS Server is now running on port: ${PORT_SSL}`);
// });
