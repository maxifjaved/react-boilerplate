import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from 'react-apollo';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes } from './routes'
import { store, history } from './store'


import { client } from './apollo'


render(
    <Provider store={store}>
        <ApolloProvider store={store} client={client}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </ApolloProvider>
    </Provider>, document.getElementById('app')
);
