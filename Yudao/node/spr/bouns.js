// - 工资*12 + 绩效等级 
//     A  12
//     B   6
//     C   3
//     D   0
// const caculateBouns = () => {

// }

//const 常量 必须赋值  且不能修改常量  let 变量需要赋值
// null 字符串(var) Boolean 常量(const) 变量(let)
// 对象字面量 发钱的策略
let caculateBouns = null
let categories = {
    'S': (salary) => {
        return salary * 60
    },
    'A': (salary) => {
        return salary * 24
    },
    'B': (salary) => {
        return salary * 18
    },
    'C': (salary) => {
        return salary * 15
    },
    'D': (salary) => {
        return salary * 10
    }
}

// 计算过程
caculateBouns = (salary, type = 'C') => {
    let bounce = categories[type](salary);
    return bounce;
}

console.log(caculateBouns(30000, 'S'));