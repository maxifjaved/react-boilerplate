import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from 'react-apollo';

import { Provider } from 'react-redux';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes } from './routes'
import { store, history } from './store'


import { client } from './apollo'
import { Intl } from './containers'


render(
    <Provider store={store}>
        <ApolloProvider store={store} client={client}>
            <Intl>
                <Routes />
            </Intl>
        </ApolloProvider>
    </Provider>, document.getElementById('app')
);
