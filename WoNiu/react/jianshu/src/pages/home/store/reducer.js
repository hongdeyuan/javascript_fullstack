import { fromJS } from 'immutable'
import { types } from './index'
// fromJS 转换成 immutable对象
// immutable.js
// immutable对象 - 不可改变的对象
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  users: [],
  display: true,
  showScroll: true,
  articlePage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_DATA:
      return state.merge({// 把多个对象合并成一个对象
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        users: fromJS(action.users)
      });
    case types.CHANGE_HOME_QRCODE: 
      return state.set('display', false);
    case types.CHANGE_HOME_QRCODE_NONE: 
      return state.set('display', true);
    case types.ADD_HOME_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      });
    default:
      return state;
  }
}