import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)// store 已经知道笔记本中记过两个笔记

export default store