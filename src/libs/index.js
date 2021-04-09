"use strict";
// 类库分为三类： 全局类库，模块类库，UMD库
// 使用非ts编写的类库的时候，必须得用声明文件，有的包含在源码里，有的得单独安装，比如jquery
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
jquery_1.default('.app').css('color', 'red');
// globalLib({x: 1})
// globalLib.doSomething()
var module_lib_1 = __importDefault(require("./module-lib"));
module_lib_1.default.doSomething();
// 模块化插件
var moment_1 = __importDefault(require("moment"));
moment_1.default.myFunction = function () { };
// globalLib.doAnything()
