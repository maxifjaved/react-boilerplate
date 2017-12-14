import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'
//   const isProduction = process.env.NODE_ENV !== 'development';
//   const productionUrl = 'https://corporate-dashboard-client.herokuapp.com/api';
//   const testUrl = 'http://0.0.0.0:1338/api';

//   const url = isProduction ? productionUrl : testUrl;

// const url = '/api/graphql'
const url = '/api'

// const client = new ApolloClient({
//     networkInterface: createNetworkInterface(url),
//     queryTransformer: addTypeName,
// });


// const networkInterface = createNetworkInterface({
//     uri: url,
//     opts: {
//         credentials: 'same-origin',
//         mode: 'cors'
//     }
// })


const networkInterface = createNetworkInterface({
    uri: url
})
networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) req.options.headers = {}

        const token = localStorage.getItem('token')
        req.options.headers.authorization = token || null

        next()
    }
}])

const client = new ApolloClient({
    networkInterface,
    dataIdFromObject: (o) => o.id
})
export default client;
