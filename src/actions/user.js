import gql from 'graphql-tag';

import { client } from '../apollo'


// export const userSignupRequest = data => dispatch =>
//     api.user.signup(data).then(user => {
//         localStorage.bookwormJWT = user.token;
//         // dispatch(userLoggedIn(user));
//     });

const userSignupRequest = data => dispatch => {
    return user.signup(data).then(user => {
        localStorage.bookwormJWT = user.token;
        // dispatch(userLoggedIn(user));
    });
}

const sendApolloRequest = user => async dispatch => {
    const UserQuery = gql`
    query {
        User {
            _id
            firstName
            lastName
            Misc {
              _id
              languageCode
              locale
              boolean
              alphaNumeric
              randomize
            }
          },
      }
    `;

    const { data } = await client.query({
        query: UserQuery,
    });
    // return user.signup(data).then(user => {
    //     localStorage.bookwormJWT = user.token;
    //     // dispatch(userLoggedIn(user));
    // });
}

export { userSignupRequest, sendApolloRequest }