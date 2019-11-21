let loadingNode = document.createElement('div');
loadingNode.style.backgroundColor = '#666';
loadingNode.style.opacity = '.6';
loadingNode.style.position = 'absolute';
loadingNode.style.top = '0';
loadingNode.style.left = '0';
loadingNode.style.right = '0';
loadingNode.style.bottom = '0';

function toggleLoading(el, binding) {
  if (binding.value) {
    el.appendChild(loadingNode);
  } else {
    // el.contains(loadingNode): 判断 是否有 loadingNode 结点
    el.contains(loadingNode) && el.removeChild(loadingNode);
  }
}

// 插件
let plugin = {};
// Vue.use()  此时会把 Vue 传进来
plugin.install = function(Vue) {
  Vue.directive('loading', {
    bind: function (el, binding) {
      // console.log(el, binding)
      // 第一次绑定的时候 只会调用一次
      toggleLoading(el, binding);
    },
    // 指令的值更新时，调用
    update(el, binding) {
      toggleLoading(el, binding);
    }
  })
}
// vue 插件 提供全局的方法
// 第一步 import VueLoading from 'vue-loading
// 第二步 Vue.use(VueLoading)
// 导出
// 通用 模块化 方案 UMD
if (typeof exports === 'object') {
  module.exprots = plugin;
} else {
  // window
  // window.VueLoading = plugin  ; 此时，你需要自己 去页面 使用Vue.use(VueLoading),才会生效
  window.Vue.use(plugin);
}
