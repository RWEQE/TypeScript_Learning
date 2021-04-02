// 对象类型接口
interface List {
  readonly id: number; // readonly 只读属性，不可修改
  name: string;
  age?: number; // ?: 可选属性，可以没有
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value)=>{
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
  })
}

let result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B', age: 10 }
  ]
}
// 不会对额外的字段进行检查

render(result)

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
} as Result)
// 类型断言2，尽量不要使用这种，因为会在React中产生歧义
render(<Result>{
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
})
// 使用字符串索引签名
interface List2 {
  id: number;
  name: string;
  [x: string]: any;
}

// 用数字索引的接口
interface stringArray { // 相当于 字符串数组
  [index: number]: string // 签名
}
let chars: stringArray = ['A', 'B', 'C']

// 用字符串索引的接口
interface Names {
  [x: string]: string;
  // y: number  // 不被允许，因为上面签名限制了
  [z: number]: string // 这样可以混用，因为Javascript会进行类型转换，将number转换成string类型，保持兼容
  // 但是 数字索引的 返回值 一定得是字符串索引 返回值 的 子类型，这里如果想把数字签名返回值改成number，那上面得改成any
}

