import Cookies from 'js-cookie'

Cookies.set('name', 'value', { expires: 365 });

// name: cookie名称， value: cookie需要存储的值， expires：过期时间
Cookies.remove('name');
// 删除 名称为 name的 cookie

Cookies.getJSON('name'); // => { foo: 'bar' }
// 使用 getJSON会得到 以对象格式的形式 获得cookie值

console.log('js-cookie')

