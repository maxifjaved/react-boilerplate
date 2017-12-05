import { api } from '../utils'

export const signup = data => dispatch =>
    api.user.signup(data).then(user => {
        localStorage.bookwormJWT = user.token;
        // dispatch(userLoggedIn(user));
    });
