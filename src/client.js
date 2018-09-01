import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter';

ReactDOM.hydrate(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>,
    document.getElementById('app')
);
