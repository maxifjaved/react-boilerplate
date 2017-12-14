import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import photo from './photo'


import { client } from '../apollo';
const rootReducer = combineReducers({
    photo: photo,
    routing: routerReducer,
    apollo: client.reducer()
})

export { rootReducer }