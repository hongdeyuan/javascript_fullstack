import { fromJS } from 'immutable'
// fromJS 转换成 immutable对象
// immutable.js
// immutable对象 - 不可改变的对象
const defaultState = fromJS({
  topicList: [
    {
    id: 1,
    title: '社会热点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },
  {
    id: 2,
    title: '手绘',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }
]
})

export default (state = defaultState, action) => {

  return state
}