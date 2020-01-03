// 向外输出一个 路由对象
import express from 'express';
import Cities from '../controller/v1/cities'
const router = express.Router();
// mvc Controller
router.get('/suggestion', Cities.suggestion)

export default router;