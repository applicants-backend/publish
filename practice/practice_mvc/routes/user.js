const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

// 전체 목록 보기
router.get('/main', controller.main);

router.get('/signin', controller.signin);
router.get('/signin', controller.post_signin);

router.post('/signup', controller.signup)
router.post('/signup', controller.post_signup)

// 상세보기

module.exports = router;

