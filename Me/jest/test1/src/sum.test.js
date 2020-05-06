const sum = require('./sum')
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
  expect(n).toBeNull();// null
  expect(n).toBeDefined();// defined
  expect(n).not.toBeUndefined();// undefined
  expect(n).not.toBeTruthy();// true
  expect(n).toBeFalsy();// false
});

// 0
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
  expect(value).toBeGreaterThan(3);//大于
  expect(value).toBeGreaterThanOrEqual(3.5);// 大于等于
  expect(value).toBeLessThan(5);//小于
  expect(value).toBeLessThanOrEqual(4.5);// 小于等于

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3); // 这句可以运行，  浮点数比较
});

//测试字符串 
// 正则
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);// 正则表达式的字符
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