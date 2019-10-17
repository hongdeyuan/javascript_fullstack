// 鸭子王国，1000只鸭子 ，鸭子合唱团

const chior = []; //合唱团

//加入合唱团
function joinChior(ani) {

    if (ani && typeof ani.duckSinging == 'function') {
        chior.push(ani);
    } else {
        console.log('不符合要求');
    }

    if (chior.length >= 1000) {
        console.log('task success!')
    } else {
        // 字符串拼接 `当前已完成 ${chior.length}位招募 `
        console.log('当前已完成 ' + chior.length + ' 位招募');
    }
}
// 对象 、 属性、方法
let duck = {
    // 属性
    name: '王小鸭',
    // 能干一件事的能力(方法)
    duckSinging: function() {
        console.log('丫丫丫');
    }
}

let chicken = {
    name: '山鸡',
    chickenSinging: function() {
        console.log('咯咯咯');
    },
    duckSinging: function() {
        console.log('丫丫丫');
    }
}

joinChior(chicken);

// duck.duckSinging();

for (let i = 0; i < 999; i++) {
    joinChior(duck);
}