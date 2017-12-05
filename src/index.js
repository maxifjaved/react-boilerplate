import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { App } from './containers'
import { Routes } from './routes'
import { store } from './store'

render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.getElementById('app')
);
