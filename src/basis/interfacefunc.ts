// 函数类型接口
// 三种方式

let adaa: (x: number, y: number) => number

interface adab {
  (x: number, y: number): number
}

// 使用类型别名
type adac = (x: number, y: number) => number

// 具体实现
let abc: adac = (x, y) => x + y


// 混合类型 接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib
  lib.version = '1.0'
  lib.doSomething = () => {console.log('lib')}
  return lib
}

let lib1 = getLib()
lib1()
lib1.doSomething()
let lib2 = getLib()
