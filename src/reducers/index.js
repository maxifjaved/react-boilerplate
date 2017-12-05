import  { combineReducers } from  'redux'
import  photo from  './photo'

const  rootReducer = combineReducers({
     photo: photo
})

export{ rootReducer }