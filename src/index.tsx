// import './basis/datatype.ts'
// import './basis/enum.ts'
// import './basis/interfaceobj.ts'
// import './basis/interfacefunc.ts'
// import './basis/function.ts'
// import './basis/class2.ts'
// import './es6/c'
// import './libs/index'

// let hello : string = 'Hello TypeScript'
// document.querySelectorAll('.app')[0].innerHTML = hello

import React from 'react'
import ReactDom from 'react-dom'

import Hello from './components/demo/Hello'

ReactDom.render(
  <Hello name="TypeScript!" />,
  document.querySelectorAll('.app')[0]
)