"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var c1 = require('./a.node');
var c2 = require('./b.node');
var c3 = require('../es6/a');
var d_1 = __importDefault(require("../es6/d"));
console.log(c1);
console.log(c2);
c3.default();
d_1.default();
