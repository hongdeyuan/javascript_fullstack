//require：使用的是 commonjs方案的 模块化 
// const express = require('express')

// es6 模块方案
// node 中使用 es6模块化
import express from 'express';
import router from './routers/index.js'
const app = express();
router(app)
app.listen(3000);//config.port

module.exports = app;
