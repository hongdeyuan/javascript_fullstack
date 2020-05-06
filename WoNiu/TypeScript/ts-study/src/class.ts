// 抽象类
abstract class Animal {
  abstract makeSound (): void ;
  move(): void{
    console.log('roaming the earth...')
  }
}

// 继承抽象类 && 重写 move
class Cat extends Animal{
  makeSound () {
    console.log('miao miao')
  }
  move(): void{
    super.move()
    console.log('Cat Move')
  }
}

// const cat = new Cat()

// cat.makeSound()


// 访问限定符
// class Cat {
//   public run () {
//     console.log('run ...')
//   }
//   // 私有属性 -> 在本身的类中使用
//   private eat() {
//     console.log('吃起来了。。。')
//   }
//   // 保护属性 -> 在本身的类中使用 或者 子类中使用
//   protected sleep () {
//     console.log('睡觉吧。。。')
//   }
// }

// class CTR extends Cat {
//   init() {
//     this.run()
//     this.sleep()
//   }
// }

// const cat = new Cat()
// cat.run()// run ...

// const ctr = new CTR()
// ctr.init()



// class 可以作为接口


// public static defaultProps = new Props()
// props: props