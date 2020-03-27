

1. 自我介绍
2. SQL事物
3. 大量数据检索(我答索引)
4. 索引缺点
5. 五层网络层
6. header里有啥和缓存相关
7. if-none-match和if-modified-since(这里我有异议，我说返回200协商缓存，304强缓存，面试官说我说反了)
8. 箭头函数
9. 队列和栈
10. 排序算法和时间复杂度
11. css垂直水平居中方法
12. v-if和v-show是啥
13. vue双向绑定原理

14.好像是这样记不太清了 之前没用过promise凉凉
promise.resolve().then(() => {
console.log("1");
throw ERROR;
catch...
console.log("2");
then...
console.log("3");
throw ERROR;
catch...
console.log("4");
then...
console.log("5");
throw...
console.log("6");
})

15. 算法题:
数每个元素的比它小的元素的数量
输入[8,1,2,2,3]
输出[4,0,1,1,3]
解释：比8小的有1，2，2，3所以是4
比1小的有0个所以是0
答案：map