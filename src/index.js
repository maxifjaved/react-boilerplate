import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from 'react-apollo';
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';


import { Provider } from 'react-redux';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { App } from './containers'
import { Routes } from './routes'
import { store } from './store'



// const client = new ApolloClient({
//     link: new HttpLink({ uri: '/api/graphql' }),
//     cache: new InMemoryCache()
// });

import { client } from './apollo'


render(
    <ApolloProvider store={store} client={client}>
        <Routes />
    </ApolloProvider>, document.getElementById('app')
);
