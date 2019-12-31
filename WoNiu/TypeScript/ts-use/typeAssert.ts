// 类型断言 - 类型守卫
// interface Person {
//   name: string,
//   age: number,
// }

// 不要轻易使用，因为会使ts相关的代码丧失提示能力
// const person = {} as Person// 类型断言会影响代码提示
// person.name = 'wn'
// person.age = 18

// 双重断言
// const person = {} as any as Person// 也不推荐轻易使用
// person.name = 'dhyuan'

//类型守卫
class Person {
  name = 'dhyuan';
  age = 18;
}
class Animal {
  name = 'petty';
  color = 'pink';
}

// 类型守卫： 如果属性不属于它，无法拿到，会报错
function getSomething(arg: Person | Animal) {
  // 1
  // if(arg instanceof Animal) {
  //   console.log(arg.name);
  //   console.log(arg.color);
  // }
  // if(arg instanceof Person) {
  //   console.log(arg.name);
  //   console.log(arg.age);
  // }

  // 2
  // if('color' in arg) {
  //   console.log(arg.name);
  //   console.log(arg.color);
  // }
  // if('age' in arg) {
  //   console.log(arg.name);
  //   console.log(arg.age);
  // }

  // 3
  if('name' in arg) {
    console.log(arg.name);// name? 是哪个？
  }
}

const test = {
  name: 'ljc'
}
getSomething(new Person())


// 字面量守卫

type Foo = {
  kind: 'foo',//字面量类型
  foo: number
}

type Bar = {
  kind: 'bar',
  bar: number
}

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo);
    // console.log(arg.bar)
  }
  if (arg.kind === 'bar') {
    // console.log(arg.foo);
    console.log(arg.bar)
  }
}