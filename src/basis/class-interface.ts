interface Human{
  name: string;
  eat(): void
}

// 类实现接口必须定义 接口的所有属性，类可以增加额外属性
// 接口只能约束 类的 共有成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  private age: number = 12
  eat() {}
  sleep() {}
}

// 接口继承接口 可以把多个接口合并成一个接口
interface Man extends Human {
  run(): void
}
interface Child{
  cry(): void
}
interface Boy extends Man,Child{}
let boy: Boy = {
  name: 'jack',
  eat() {},
  run() {},
  cry() {}
}

// 接口继承类 会继承类中 属性的结构 不会继承具体实现，而且私有成员，受保护成员 也会被抽离
class Auto {
  state = 1
  // private state2 = 0 // 会报错，因为 类C 不是Auto的子类，不能包含它的非公有成员
}
interface AutoInterface extends Auto {

}
class C implements AutoInterface { 
  state = 0
}

class Bus extends Auto implements AutoInterface { // 这里不用实现state属性，因为 Auto已经实现了 继承下来

}