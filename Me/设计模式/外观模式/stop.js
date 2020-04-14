var stopEvent = function (e) {
  // 同时阻止默认事件行为和冒泡
  e.stopPropagation()
  e.preventDefault()
}

// 生产门面
$('#a').click(function(e) {
  stopEvent(e)
})