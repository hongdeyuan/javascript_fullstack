function Animal(name) {
  this.name = name
}

Animal.prototype.eat = function() {
  console.log('eat')
}

function Cat() {
  
}

Cat.prototype = new Animal('cat')

