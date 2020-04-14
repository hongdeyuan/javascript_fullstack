var fuhao = {

}

fuhao.huofang = function () {
  return '做馒头'
}

fuhao.dealFood = function () {
  return '产出面粉'
}

fuhao.mantou = function () {
  this.dealFood()
  this.huofang()
}

// 人们想拿到馒头，第一个需要做得是让系统产生馒头
fuhao.men = function () {
  return this.mantou()
}