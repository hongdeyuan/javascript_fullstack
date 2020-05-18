import { createStore, combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import reducer from './reducer'

const reducers = combineReducers({
    reducer: reducer,
    form: formReducer
})

const store = createStore(reducers)// store 已经知道笔记本中记过两个笔记

export default store