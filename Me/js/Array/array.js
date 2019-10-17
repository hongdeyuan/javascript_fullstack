//Array 对象属性 constructor \ length  \ prototype

// - constructor  ->返回对创建此对象的数组函数的引用。
//  constructor 属性是专门为 function 而设计的，

// <---------------------------constructor-------------------------------------->
// 它存在于每一个function 的prototype 属性中。这个constructor 保存了指向 function 的一个引用
function employee(name, job, born) {
    this.name = name;
    this.job = job;
    this.born = born;
    this.a = 5;
}


var bill = new employee("Bill Gates", "Engineer", 1985);


console.log(employee.prototype.constructor);
console.log(typeof bill.constructor);

// <--------------------------------使用prototype添加一个方法------------------------>

employee.prototype.salary = 20000;

let efunc = new employee();

console.log('工作 ：' + efunc.salary)


function MyClass(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function(name, age) {
        console.log('name :\t' + name + '\t age : \t' + age);
    }
}


//使用prototype添加一个方法
MyClass.prototype.exam = function() {
    console.log("姓名 ：" + this.name);
}
var cls1 = new MyClass("dhyuan", 10);

console.log('MyClass.constructor.prototype \t' + cls1.constructor.prototype)

// console.log('MyClass.constructor.prototype.prototype \t' + MyClass.constructor.prototype.prototype)


cls1.exam()
cls1.toString('袁德红', '22');


//可以正常删除exam方法
delete MyClass.prototype.exam;
console.log(MyClass.prototype.exam); //undefined


// <--------------------------------concat使用------------------------------->

//使用concat连接数组中的值
var a = [1, 2, 3];
console.log(a.concat(4, 5));

//使用concat连接两个数组
var arr1 = ['1', '2', '3'];
var arr2 = ['4', '5', '6'];

console.log(arr1.concat(arr2));

//使用concat连接 三个数组
var arr3 = ['1', '2', '3'];
var arr4 = ['4', '5', '6'];
var arr5 = ['7', '8', '9'];

console.log(arr3.concat(arr4, arr5));

// 由三个实例可以，总结出 ：虽然concat() 操作的参数是数组，但添加的是每个数组中的元素，而不是数组

// <--------------------------------join使用------------------------------->
// join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

console.log('arr.join() \t' + arr.join('')) // 默认不填 参数：分隔符时  js 默认添加 ',' 为分隔符 /  '' 表示不用分割符直接连接

// <--------------------------------pop使用------------------------------->
// pop() 方法用于删除并返回数组的最后一个元素。
console.log('arr.pop() \t' + arr.pop())

// <--------------------------------reverse使用------------------------------->
//reverse() 方法用于颠倒数组中元素的顺序。
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
console.log(arr)//George,John,Thomas
console.log(arr.reverse())//Thomas,John,George


// <--------------------------------shift使用------------------------------->
//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
console.log(arr.shift())//数组删除了一个元素George 并返回George ，并且数组中只剩下John,Thomas


//<-------------------slice使用------------------------------->
//slice() 方法可从已有的数组中返回选定的元素。-1 指最后一个元素，-2 指倒数第二个元素，以此类推
//返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素
arr.slice(1)//如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素 arr(star,end)  左闭右开


//<-------------------sort使用------------------------------->
//sort() 方法用于对数组的元素进行排序  规定排序顺序。必须是函数

//如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，
//是按照字符编码的顺序进行排序。要实现这一点，
//首先应把数组的元素都转换成字符串（如有必要），以便进行比较
//如果要完成排序功能必须给 sort传一个函数 参数  a-b  ：从小到大  b-a:从大到小

arr.sort();

//<-------------------splice使用------------------------------->
// splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目
var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"
arr.splice(2,0,"William")//将删除位于 index 2 的元素，并添加一个新元素来替代被删除的元素
arr.splice(2,1,"William")//它将创建一个新数组，并向其添加一个元素

//<-------------------toSource使用------------------------------->
//toSource()返回该对象的源代码
function employee(name,job,born)
{
this.name=name;
this.job=job;
this.born=born;
}

var bill=new employee("Bill Gates","Engineer",1985);

console.log(bill.toSource());
//输出：({name:"Bill Gates", job:"Engineer", born:1985})


//<-------------------toString使用------------------------------->
//toString() 方法可把数组转换为字符串，并返回结果
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

console.log(arr.toString());
//输出：George,John,Thomas


//<-------------------toLocaleString使用------------------------------->
//首先调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

console.log(arr.toLocaleString())



//<-------------------unshift使用------------------------------->
// unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度

var arr = new Array()
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

arr.unshift("William") // length:4
console.log(arr)//输出： William,George,John,Thomas



//<-------------------valueOf使用------------------------------->
//valueOf() 方法返回 Array 对象的原始值。




//<-------------------call使用------------------------------->
//call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"

//在一个子构造函数中，你可以通过调用父构造函数的 call 方法来实现继承，类似于 Java 中的写法。

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

//在下例中的 for 循环体内，我们创建了一个匿名函数，然后通过调用该函数的 call 方法，将每个数组元素作为指定的 this 值执行了那个匿名函数
var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
    (function(i) {
        this.print = function() {
            console.log('#' + i + ' ' + this.species +
                ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}

//使用 call 方法调用函数并且指定上下文的 'this'
function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}

var obj = {
    animal: 'cats',
    sleepDuration: '12 and 16 hours'
};

greet.call(obj); // cats typically sleep between 12 and 16 hours

//使用 call 方法调用函数并且不指定第一个参数（argument）
var sData = 'Wisen';

function display() {
    console.log('sData value is %s ', this.sData);
}

display.call(); // sData value is Wisen

//注意： 在严格模式下，this 的值将会是 undefined。见下文
'use strict';

var sData = 'Wisen';

function display() {
    console.log('sData value is %s ', this.sData);
}

display.call(); // Cannot read the property of 'sData' of undefined