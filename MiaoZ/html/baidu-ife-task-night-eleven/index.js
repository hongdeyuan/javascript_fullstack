var person1 = document.querySelector('.person1');
var hovers = document.querySelector('.person1-hover')

//显示
person1.onmouseover = function() {
    hovers.style.display = "block";
}

// 隐藏
person1.onmouseout = function() {
    hovers.style.display = "none";
}