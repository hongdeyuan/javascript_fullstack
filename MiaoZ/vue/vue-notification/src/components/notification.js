import Vue from 'vue'

import Notfication from './Notfication'

// new Swiper()
// 面向对象有一个好处 达到代码 复用

const NotificationConstructor = Vue.extend(Notfication)


// 单例的
let notification
export const open = ( {title, content} ) => {
  if (notification) {
    notification.title = title
    notification.content = content
  } else {
    notification = new NotificationConstructor({
      el: document.createElement('div'),
      propsData: {
        visiable: true,
        title: title,
        content: content
      }
    })
  }
  
  document.body.appendChild(notification.$el)
}

export const close = function () {
  notification.visiable = false
  console.log(notification.$el)
  document.body.removeChild(notification.$el)
  notification = null
}
