interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}
// 交叉类型 取所有类型的 并集
// 适合做 对象的混入
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
}

// 联合类型 取所有类型的 交集 （即 ｜）
// 可以使类型 具有不确定性， 使代码具有灵活性
let a: number | string = 'a'
let ba: 'a' | 'b' | 'c'
let bac: 1 | 2 | 3

class Dog implements DogInterface {
  run() {}
  eat() {}
}
class Cat implements CatInterface {
  jump() {}
  eat() {}
}
enum Master { Boy, Girl }
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog() : new Cat()
  pet.eat()
  // pet.run() // NO
  return pet
}

// 可区分的联合类型
// 一个类型如果是多个类型的联合类型 并且每个类型之间有一个公共的属性 那么我们就可以凭借这个类型属性 创建不同的保护区块 如下
interface Square {
  kind: 'square',
  size: number,
}
interface Rectangle{
  kind: 'rectangle',
  weight: number,
  height: number,
}
interface Circle{
  kind: 'circle',
  r: number
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
  switch(s.kind) {
    case "square":
      return s.size * s.size
    case "rectangle":
      return s.height * s.weight
    case "circle":
      return Math.PI * s.r ** 2
    default: 
      return ((e: never) => {throw new Error(e)})(s)
  }
}
console.log(area({kind: 'circle', r: 1}))



export { Dog };