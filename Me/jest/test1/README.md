# jest学习实践
  
## 安装
  npm install --save-dev jest
  or
  yarn add --dev jest

## 学习文档
  jest官方文档 https://jestjs.io/docs/zh-Hans/getting-started

## 常见语法解析
  1. expect() ： 返回被称作“expectation”的对象，它可以调用被测的function
    用法：
    test('two plus two is four', () => {
      const add = 2+2;
      const value =4;
      expect(add).toBe(value);
    });

  2. toBe()： 被称作matcher，也可以调用被测的function
  3. not.toBe():意思就是 不等于它 
    用法： `expect(add).not.toBe(value);`
  4. 比较null,undefined,true,false
    ```js
    expect(n).toBeNull(); // 比较是否为null
    expect(n).toBeDefined(); // 比较是否为defined
    expect(n).not.toBeUndefined(); // 比较是否为undefined
    expect(n).not.toBeTruthy(); // 比较是否为true
    expect(n).toBeFalsy(); // 比较是否为false
    ```
  5. 比较number
    用法：
    ```js
    expect(value).toBe(4); 
    expect(value).toEqual(4);
    ```
  6. 比较string
    使用toMatch()方法
    ```js
    test('there is no I in team', () => {
      expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
      expect('Christoph').toMatch(/stop/);
    });
    ```
  7. 比较Arrays
    使用toContain()方法
    ```js
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer',
    ];

    test('the shopping list', () => {
      expect(shoppingList).toContain('beer');
      expect(shoppingList).not.toContain('pork');
    });
    ```
## 创建项目
  以react 为例，并且确保自己安装了 create-react-app 
  cnpm i -g create-react-app
  create-react-app test1
  cd test1
  yarn test

### 创建sum.js 文件
  在src下创建sum.js 文件
  ```js
  function sum(a, b) {
  return a + b;
  }
  module.exports = sum;
  ```
  在src下创建sum.test.js 文件

  ```js
  const sum = require('./sum');
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  ```
  结果显示 ： PASS src/sum.test.js (5.5ms)


## 使用适配器
• 对象
• 测试相反的匹配
• 区分区分undefined、 null，和 false
• 测试数字的值
• 字符串 （正则）
• //测试数组或迭代对象是否包含某个特定项目
• //测试的特定函数抛出一个错误
```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

//对象
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

//测试相反的匹配
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

//区分undefined、 null，和 false
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

//测试数字的值
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('两个浮点数字相加', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
    expect(value).toBeCloseTo(0.3); // 这句可以运行
});

//测试字符串 
// 正则
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

//测试数组或迭代对象是否包含某个特定项目
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});

//测试的特定函数抛出一个错误
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});
```

## 测试异步回调
• 回调
• promises
• .resolvues / .rejects
• Async / Await
```js
//测试回调函数
function fetchData(callback) {
    setTimeout(function () {
        var data = 'peanut butter'
        callback(data)
    }, 1000)
}

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

//测试promise
function fetch() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var data = 'peanut butter'
            resolve(data)
            //reject('error')
            // 失败则调用 reject
        }, 2000)
    })
}

test('the data is peanut butter', () => {
    return fetch().then(data => {
        expect(data).toBe('peanut butter');
    });
});

//.resoluvs / .rejects

test('the data is peanut butter', () => {
    return expect(fetch()).resolves.toBe('peanut butter');
  });

//   test('the fetch fails with an error', () => {
//     return expect(fetch()).rejects.toMatch('error');
//   });

//Async / Await

test('the data is peanut butter', async () => {
    const data = await fetch();
    expect(data).toBe('peanut butter');
});



//   test('the fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//       await fetch();
//     } catch (e) {
//       expect(e).toMatch('error');
//     }
//   });

test('the data is peanut butter', async () => {
    await expect(fetch()).resolves.toBe('peanut butter');
});

//   test('the fetch fails with an error', async () => {
//     await expect(fetch()).rejects.toThrow('error');
//   });

```

## 测试前后辅助函数
  - 多次测试重复设置
```js
function initializeCityDatabase(){
    console.log('测试前调用方法')
    return new Promise((resolve, reject)=>{
        resolve('返回')
    })
}
function clearCityDatabase(){
    console.log('测试后调用方法')
    return new Promise((resolve, reject)=>{
        resolve('返回')
    })
}
function isCity(input){
    return 'Vienna'
}

beforeEach(() => {
    initializeCityDatabase();
  });
  
  afterEach(() => {
    clearCityDatabase();
  });
  
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
```
  - 作用域
  顶级的 beforeEach 在 describe 块级的 beforeEach 之前被执行
```js
function initializeFoodDatabase() {
    console.log('2')
    return 1;
}
function isValidCityFoodPair() {
    return true;
}

describe('matching cities to foods', () => {
    // Applies only to tests in this describe block

    beforeEach(() => {
        return initializeFoodDatabase();
    });

    test('Vienna <3 sausage', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });
});
```

- 顺序
```js
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});
// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
```

## Mock
  Jest 中的三个与 Mock 函数相关的API，分别是jest.fn()、jest.spyOn()、jest.mock()。使用它们创建Mock函数能够帮助我们更好的测试项目中一些逻辑较复杂的代码，例如测试函数的嵌套调用，回调函数的调用等。
在项目中，一个模块的方法内常常会去调用另外一个模块的方法。在单元测试中，我们可能并不需要关心内部调用的方法的执行过程和结果，只想知道它是否被正确调用即可，甚至会指定该函数的返回值。此时，使用Mock函数是十分有必要。
Mock函数提供的以下三种特性，在我们写测试代码时十分有用：
• 捕获函数调用情况
• 设置函数返回值
• 改变函数的内部实现

### jest.fn()
  jest.fn()是创建Mock函数最简单的方式，如果没有定义函数内部的实现，jest.fn()会返回undefined作为返回值。
```js
test('测试jest.fn()调用', () => {
    let mockFn = jest.fn();
    let result = mockFn(1, 2, 3);

    // 断言mockFn的执行后返回undefined

    expect(result).toBeUndefined();
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
    // 断言mockFn被调用了一次
    expect(mockFn).toBeCalledTimes(1);
    // 断言mockFn传入的参数为1, 2, 3
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
})
```

  jest.fn()所创建的Mock函数还可以设置返回值，定义内部实现或返回Promise对象
```js
test('测试jest.fn()返回固定值', () => {
    let mockFn = jest.fn().mockReturnValue('default');
    // 断言mockFn执行后返回值为default
    expect(mockFn()).toBe('default');
})

test('测试jest.fn()内部实现', () => {
    let mockFn = jest.fn((num1, num2) => {
        return num1 * num2;
    })
    // 断言mockFn执行后返回100
    expect(mockFn(10, 10)).toBe(100);
})

test('测试jest.fn()返回Promise', async () => {
    let mockFn = jest.fn().mockReturnValue('default')
    let result = await mockFn();
    // 断言mockFn通过await关键字执行后返回值为default
    expect(result).toBe('default');
    // 断言mockFn调用后返回的是"[object String]"对象
    expect(Object.prototype.toString.call(mockFn())).toBe("[object String]")
})
```

 下面我们在src/fetch.js文件中写一些被测试代码，以更加接近业务的方式来理解Mock函数的实际应用。

```js
// fetch.js

import axios from 'axios';

export default {
  async fetchPostsList(callback) {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      return callback(res.data);
    })
  }
}
```

我们在fetch.js中封装了一个fetchPostsList方法，该方法请求了JSONPlaceholder提供的接口，并通过传入的回调函数返回处理过的返回值。如果我们想测试该接口能够被正常请求，只需要捕获到传入的回调函数能够被正常的调用即可。下面是functions.test.js中的测试的代码

```js
  import fetch from './fetch.js'

  test('fetchPostsList中的回调函数应该能够被调用', async () => {
    expect.assertions(1);
    let mockFn = jest.fn();
    await fetch.fetchPostsList(mockFn);
  
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
  })
```


### jest.mock()
  fetch.js文件夹中封装的请求方法可能我们在其他模块被调用的时候，并不需要进行实际的请求（请求方法已经通过单侧或需要该方法返回非真实数据）。此时，使用jest.mock(）去mock整个模块是十分有必要的。
  下面我们在src/fetch.js的同级目录下创建一个src/events.js
```js
// events.js

import fetch from './fetch';

export default {
  async getPostList() {
    return fetch.fetchPostsList(data => {
      console.log('fetchPostsList be called!');
      // do something
    });
  }
}
```

functions.test.js中的测试代码如下

```js
// functions.test.js

import events from '../src/events';
import fetch from '../src/fetch';

jest.mock('../src/fetch.js');

test('mock 整个 fetch.js模块', async () => {
  expect.assertions(2);
  await events.getPostList();
  expect(fetch.fetchPostsList).toHaveBeenCalled();
  expect(fetch.fetchPostsList).toHaveBeenCalledTimes(1);
});
```

在测试代码中我们使用了jest.mock('../src/fetch.js')去mock整个fetch.js模块。如果注释掉这行代码，执行测试脚本时会出现以下报错信息
  ![img](https://cdn.nlark.com/yuque/0/2020/png/414093/1581248345334-12372296-4f63-4a14-9191-89e1ff75878d.png)

从这个报错中，我们可以总结出一个重要的结论:
  > 在jest中如果想捕获函数的调用情况，则该函数必须被mock或者spy！

### jest.spyOn()
  jest.spyOn()方法同样创建一个mock函数，但是该mock函数不仅能够捕获函数的调用情况，还可以正常的执行被spy的函数。实际上，jest.spyOn()是jest.fn()的语法糖，它创建了一个和被spy的函数具有相同内部代码的mock函数。

```js
// functions.test.js

import events from '../src/events';
import fetch from '../src/fetch';

test('使用jest.spyOn()监控fetch.fetchPostsList被正常调用', async() => {
  expect.assertions(2);
  const spyFn = jest.spyOn(fetch, 'fetchPostsList');
  await events.getPostList();
  expect(spyFn).toHaveBeenCalled();
  expect(spyFn).toHaveBeenCalledTimes(1);
})
```

[参考](https://www.yuque.com/docs/share/eaf58aaa-b497-45a0-9e05-74c2d78d60f0#OWC05)