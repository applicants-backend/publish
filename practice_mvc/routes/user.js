const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

// 전체 목록 보기
router.get('/main', controller.main);

router.get('/signin', controller.signin);

router.post('/signup', controller.signup)

// 상세보기
router.get('/profile/edit', controller.post_profile)

module.exports = router;

