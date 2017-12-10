import { user } from '../api'

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

export { userSignupRequest }