// var a = 0

// function  Fun() {
//   this.a = 10
//   this.b = () => {
//     console.log(this.a)
//   }
// }

// Fun.prototype = {
//   b: function() {
//     this.a = 20
//     console.log(this.a, this)
//   },
//   c () {
//     console.log(this.a, this)
//   }
// }

// var fun = new Fun()
// fun.b.call(null)
// fun.c.call(null)

var b = 10
function fun(num){
  console.log(num)
  let nums = 2
}

fun(b)