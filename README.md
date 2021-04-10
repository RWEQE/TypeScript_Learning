# TypeScript_Learning
TypeScript_Learning

// 两种工具编译 typescript 两种工具不要混用
使用tsc编译 ts项目：
  ts-loader/awesome-typescript-loader 把ts代码编译成js代码
使用babel7之后版本：
  tsc只负责类型检查
  babel需要安装：
    "@babel/cli",
    "@babel/core",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-reset-spread",
    "@babel/preset-env",
    "@babel/preset-typescript"

.babelrc中配置：
  {
    "preset": {
      "@babel/env",
      "@babel/preset-typescript"
    },
    "plugin": [
      "@babel/plugin-class-properties",
      "@babel/plugin-object-reset-spread"
    ]
  }

babel无法编译的ts语法：
  1. 命名空间 namespace
  2. 类型断言 
  3. 常量枚举
  4. 默认导出

代码检查工具：使用ESlint
把ts语法树解析成eslint期待的语法树（ESTree）：typescript-eslint
安装插件：
  "eslint",
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser"

eslint配置（.eslintrc.json）：
  {
    "parser": "@typescript-eslint/parser",
    "plugins": ["typescript-eslint"],
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "extends": [
      "plugin: @typescript-eslint/recommended"
    ],
    "rules": {
      "@typescript-eslint/no-inferrable-types": "off" //关闭：eslint 希望使用ts的类型推断而默认不指定变量的类型
    }
  }

运行脚本：在package.json中的"scripts"中，增加命令"lint": "eslint src --ext .js,.ts",

babel-eslint 和 typescript-eslint 的区别:
babel-eslint：支持TypeScript没有的 额外语法检查，抛弃TypeScript，不支持类型检查
typescript-eslint：基于TypeScript的AST，支持创建基于类型信息的规则（tsconfig.json）
建议：两者底层机制不一样，不要一起使用，如果是babel体系的，用babel-eslint，否则用typescript-eslint

单元测试：
  使用jest，同样有几种：
    ts系：ts-jest
    babel系：babel-jest

ts系：
package.json中安装 "jest", "ts-jest", "@types/jest"

单元测试 可以进行类型检查

babel系：
安装 "jest", "babel-jest", "@types/jest"
