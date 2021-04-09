abstract class Animal { // 抽象类，只能被继承，不能实例化
  eat() { // 指定方法的具体实现，子类就不用再定义了，可以复用，直接调用
    console.log('eat')
  }
  abstract sleep(): void
}

// let animal = new Animal() // error

class Cat extends Animal{
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat('miaomiao')
cat.eat()

// 多态
class Bird extends Animal{
  sleep() {
    console.log('bird sleep')
  }
}
let bird = new Bird()
let animal: Animal[] = [cat, bird]
animal.forEach((a)=> {
  a.sleep()
})

// this类型，保持 链式调用
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2()
class MyFlow extends WorkFlow{
  next() {
    return this
  }
}
new MyFlow().next().step1().next().step2()