let obj = {
  a: 1,
  b: 2,
  c: 3,
}
function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] { // 指定一个不在obj里面的属性的话，就会报错
  return keys.map(key => obj[key])
}

console.log(getValue(obj, ['a', 'b']))
// console.log(getValue(obj, ['e', 'f']))

// 索引类型 keyof T
interface Obj {
  a: number;
  b: string;
}
let key: keyof Obj

// 索引访问操作符
// T[K]
let value: Obj['a'] = 1

// 泛型约束
// T extends U


export {}