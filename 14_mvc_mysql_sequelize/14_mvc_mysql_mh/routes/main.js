const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
//회원가입
router.get('/signup', controller.signup); //회원가입 페이지 열기
router.post('/signup', controller.post_signup); //데이터베이스에 회원정보 저장
//로그인
router.get('/signin', controller.signin); //로그인 페이지 열기
router.post('/signin', controller.post_signin); //로그인하기

//Get 방식 조회 이때는 url 을 query string 또는 파라미터 방식으로 지정
//query string 방식은 페이지 이동을 안하며 파라미터는 페이지를 이동 (res.render.())
//회원정보수정 기능

// 회원정보조회 =>GET
router.get('/profile/:id', controller.profile);

// 회원정보수정 =>PATCH
router.patch('/profile/edit', controller.edit_profile);

// 회원 구매목록 buy
router.get('/profile/buy', controller.buy)

module.exports = router;
    