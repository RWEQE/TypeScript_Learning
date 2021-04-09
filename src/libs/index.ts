// 类库分为三类： 全局类库，模块类库，UMD库
// 使用非ts编写的类库的时候，必须得用声明文件，有的包含在源码里，有的得单独安装，比如jquery

import $ from 'jquery'

$('.app').css('color', 'red')

// globalLib({x: 1})
// globalLib.doSomething()

import moduleLib from './module-lib'
moduleLib.doSomething()

// 模块化插件
import m from 'moment'
declare module 'moment' {
  export function myFunction(): void
}
m.myFunction = () => {}

// 全局化插件
declare global {
  namespace globalLib {
    function doAnything(): void
  }
}
// globalLib.doAnything()