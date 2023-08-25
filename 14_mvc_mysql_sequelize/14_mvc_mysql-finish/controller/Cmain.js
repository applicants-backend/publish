// const model = require('../model/Model');
const {User} = require('../models')
const bcrypt = require('bcrypt')

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });

    // fineOne : 데이터 베이스에서 하나의 정보를 찾을 때 사용, 객체반환
    // where: 는 객체 형태로 찾을 정보를입력
    User.findOne({
        where: {id : req.params.number},
    }).then((result) => {
        res.render('profile', {data:result})
    })
};

const buy = (req, res) => {};

///////////////////////////////
// POST
// 회원가입
const post_signup = async (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    const {userid, name, pw} = req.body
    // create 데이터 생성 
    const hash = await bcryptPassword(pw)
    User.create({userid, name, pw}).then(() => {
        res.json({result:true});
    });
};

//로그인
const post_signin = (req, res) => {
    model.db_signin(req.body, (result) => {
        if (result.length > 0) {
            res.json({ result: true, data: result[0] });
        } else {
            res.json({ result: false });
        }
    });
};
/////////////////////////////////////////
// 회원 정보 수정
// PATCH
const edit_profile = async (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    // Update (수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력)
    const {userid} = req.body;
    const user = await User.findOne({
        where:{userid},
    });
    if (user) {
        // step 2 입력된 비밀번호 암호화하여 기존 데이터와 비교
        // 사용자가 존재함
        const result = await compareFunc(pw, user.pw)
        console.log('result', result)
        if (result) {
            res.json({result : true, data : result})
        } else {
            res.json({result : false, message : '존재하는 사용자가 없습니다.'})
        }
    } else {
        res.json({result : false, message : '존재하는 사용자가 없습니다.'})
    }
    const {name, pw, id} = req.body
    User.update({name,pw}, {where : { id }}).then(() => {
        res.json({ result: true });
    })
};

////////////////////////////////////////////////////////////
// DELETE

// 실습 과제 : 비밀번호 암호화하여 저장
    // step 1 : 아이디를 찾아서 사용자 존재 유/무 체크
    // step 2 : 입력된 비밀번호 암호화하여 기존 데이터와 비교
    // 회원탈퇴 destroy() 

module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
};

//암호화
const bcryptPassword = (password) => bcrypt.hash()

// 비교
const compareFunc = (password, dbpass) => bcrypt.compare(password, dbpass)
