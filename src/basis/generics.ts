function log<T>(value: T): T {
  console.log(value)
  return value
}

log<string[]>(['1', '2', '3'])
log(['a', 'b'])

// 泛型 定义函数类型
type Log = <T>(value: T) => T
let myLog: Log = log

// 泛型接口
interface Loglog<T = string> {
  (value: T): T
}
let mylog: Loglog<number> = log
mylog(1)