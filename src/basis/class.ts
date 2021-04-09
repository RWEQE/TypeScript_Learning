class Dog {
  constructor(name: string) {
    this.name = name 
  }
  public name: string // 实例的属性必须有初始值，或者有初始化
  run() {}
  private pri() {}// 私有成员，只能在类内部调用，不能被实例调用，也不能被子类调用
  protected pro() {} // 受保护成员，只能在类和子类中访问，不能在实例中访问
  readonly legs: number = 4 // 只读属性，不能被修改，必须初始化
  static food: string = 'bones'// 类的 静态成员，只能通过 类名 来调用，调用子类名，也可以访问到
}
// 如果给构造函数加上私有属性 private constructor(){}
// 那么这个类 既不能被实例化，也不能被继承
// 构造函数也可以被声明为 pritected 那么他就不能被实例化，相当于 基类
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
// dog.pri()
// dog.pro()
console.log(Dog.food)
// console.log(dog.food)

// 继承
class Husky extends Dog {
  constructor(name: string, public color: string) { // 给构造函数的参数 增加修饰符，那么会自动变成实例的属性，就可以省略类中的定义
    super(name)
    this.color = color
    // this.pri()
    this.run()
    this.pro()
  }
  // color: string
}
console.log(Husky.food)