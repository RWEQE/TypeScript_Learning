"use strict";
function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
    });
}
var result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 10 }
    ]
};
// 不会对额外的字段进行检查
render(result);
// 如果使用对象字面量， ts就会进行检查，因为没有定义sex属性
// render({
//   data: [
//     { id: 1, name: 'A', sex: 'male' },
//     { id: 2, name: 'B' }
//   ]
// })
// 绕过这种检查的方法： 
// 1. 把字面量赋值给对象，和上面一样
// 2. 使用类型断言
// 3. 在定义List的时候 使用字符串索引签名
// 类型断言1
render({
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B' }
    ]
});
// 类型断言2，尽量不要使用这种，因为会在React中产生歧义
render({
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B' }
    ]
});
var chars = ['A', 'B', 'C'];
