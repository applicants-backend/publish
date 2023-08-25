const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// router.get('/', controller.main);



router.get('/', controller.main);

// 전체 목록 보기
router.get('/comments', controller.comm);

// 상세보기
router.get('/comment/:name', controller.comment)

// //router 분리
// const router = require('./routes/main');
// app.use('/', router);

module.exports = router;

