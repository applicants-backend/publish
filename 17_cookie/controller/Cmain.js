// const model = require('../model/Model');
const {User} = require('../models');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

// cookie 설정
const cookieConfig = {
    httpOnly:true,
    maxAge : 60 * 1000, // 1min

}

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    // Use cookie
    console.log('cookie', req.cookies)
    if (req.cookies.isLogin) {
        res.render('index');
    } else {
        res.render('index');
    }
    res.render('index');
};

//회원가입페이지
const signup = (req, res) => {
    // cookie 생성
    // res.cookie(cookieName, CookieValue, Option)
    res.cookie('testCookie', 'signup', cookieConfig)
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    console.log(req.session.userInfo, req.sessionID);
    if (req.session.userInfo) {
        res.redirect(`/profile/${req.session.userInfo.id}`)
    } else {
        res.render('signin')
    }
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    console.log(req.query);
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

const members = (req, res) => {
    if (req.session.userInfo) {
        User.findAll().then( (result) => {
            res.render('members', {name : "???" , result})
        })
    } else {
        res.redirect('/signin')
    }
    
}

///////////////////////////////
// POST
// 회원가입
const post_signup = async (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    console.log(req.session.userInfo);
    if (req.session.userInfo ) {
        res.redirect('/');
    } else {
        const {userid, name, pw} = req.body
    // // create 데이터 생성 
    const salt = crypto.randomBytes(16).toString('base64');
    const hash = crypto.pbkdf2Sync(pw, salt, Number(process.env.iterations), 
                                                Number(process.env.keylen), process.env.digest).toString('base64');
    
    User.create({
        userid, name, pw:hash, salt 
    }).then(() => {
        res.json({ result: true });
    })}
};

//로그인
const post_signin = (req, res) => {
    // model.db_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.json({ result: true, data: result[0] });
    //     } else {
    //         res.json({ result: false });
    //     }
    // });
    User.findOne({
        where: { userid: req.body.userid },
    }).then((result) => {
   
        if (result) {
            const { dataValues } = result;
            const compare = crypto.pbkdf2Sync(req.body.pw, dataValues.salt,
                                                Number(process.env.iterations), 
                                                Number(process.env.keylen), process.env.digest);
            const compareResult =  crypto.timingSafeEqual(compare, Buffer.from(dataValues.pw,'base64'));
            if (compareResult) {
                res.json({result:true, data: {id: dataValues.id, name :dataValues.name}})    
            } else {
                res.json({result:false})
            }
        } else {
            res.json({result:false})
        }
    })
};

/////////////////////////////////////////
// 회원 정보 수정
// PATCH
const edit_profile = async (req, res) => {
    const {name, pw, id} = req.body
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
            // 세션생성
            //
            // req.session.userInfo.name
            
            res.cookie('isLogin', true)
            // req.session.userInfo = user;
            res.json({result : true, data : result})
        } else {
            res.json({result : false, message : '존재하는 사용자가 없습니다.'})
        }
    } else {
        res.json({result : false, message : '존재하는 사용자가 없습니다.'})
    }
    
    User.update({name,pw}, {where : { id }}).then(() => {
        res.json({ result: true });
    })
    // let updateObj ={name};

    // if (reqpw != '') {
    //     const salt = crypto.randomBytes(16).toString('base64');
    //     const pw = crypto.pbkdf2Sync(reqpw, salt, Number(process.env.iterations), 
    //                                                  Number(process.env.keylen), process.env.digest).toString('base64');
    //     updateObj.pw = pw;
    //     updateObj.salt = salt;
    // }   
   
    // User.update(updateObj, {
    //     where : {id}
    // }).then((result) => {
    //     if (result) {
    //         res.json({result:true});
    //     } else {
    //         res.json({result:false});
    //     }   
    // })
};


const destroy = (req, res) => {

    const {id} = req.body;

    User.destroy({
        where : {id}
    }).then((result) => {
        res.clearCookie('isLogin')
        req.session.destroy()
        if (result) {
            res.json({result:true});
        } else {
            res.json({result:false});
        }   
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
    members,
    post_signup,
    post_signin,
    edit_profile,
    destroy
};

//암호화
const bcryptPassword = (password) => bcrypt.hash()

// 비교
const compareFunc = (password, dbpass) => bcrypt.compare(password, dbpass)
