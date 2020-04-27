import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
const initialState = {
  count: 0
}

const userInitialState = {
  username: 'dhyuan',
  age: 18,
  sex: '男'
}

const ADD = 'ADD'

function countReducer(state = initialState, action) {
  console.log(state.count)
  switch (action.type) {
    case ADD:
      return { count: state.count + (action.num || 1) }
    default:
      return state
  }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { 
        ...state,
        username: action.username
       }
  
    default:
      return state;
  }
}

const allReducer = combineReducers({
  count: countReducer,
  user: userReducer
})

// action creatore
function add(num) {
  return {
    type: ADD,
    num
  }
}

function addAsync(num) {
  return (dispatch) => {
    setTimeout(()=>{
      console.log('async')
      return {
        type: ADD,
        num
      }
    }, 1000)
  }
}

// {count: initialState, user: userInitialState}

const store = createStore(
  allReducer,
  {
  count: initialState
  },
  applyMiddleware(ReduxThunk)// 处理action异步的情况
)

// console.log(store.getState())
store.dispatch(add(3))

// 每次数据变化会触发, 监听需要变化的组件
store.subscribe(() => {
  console.log('changed', store.getState())
})

// store.dispatch({type: ADD})
store.dispatch(addAsync(5))


store.dispatch({type: UPDATE_USERNAME, username: 'ljc'})



export default store