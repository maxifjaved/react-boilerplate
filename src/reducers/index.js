import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import photo from './photo'
import intl from './intl'


import { client } from '../apollo';
const rootReducer = combineReducers({
    intl: intl,
    photo: photo,
    routing: routerReducer,
    apollo: client.reducer()
})

export { rootReducer }