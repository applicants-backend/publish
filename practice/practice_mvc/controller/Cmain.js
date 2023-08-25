const model = require('../model/Model');

// 메인페이지
const main = (req,res) => {
    res.render('index');
};
// 회원가입페이지
const signup = (req,res) => {
    res.render('signup');
};
// 로그인페이지
const signin = (req,res) => {
    res.render('signin');
};

// 회원가입페이지
const post_signup = (req, res) => {
    model.db_signup(req.body, () => {
        res,json({result : true });
    });
};
// 로그인 
const post_signin = (req, res) => {
    model.db_singin(req.body, (result) => {
        if (result.length >0) {
            res,json({result : true, data :result[0] });
        } else {
            res.json({result:false})
        }
        
    });
};

// exports.edit_profile = (req, res) => {
//     // User.edit_profile(req.body, () => {
//     //     res.send({ result: true });
//     // });
//     const { userid, pw, name, id } = req.body;
//     User.update({ userid, pw, name }, { where: { id } }).then((result) => {
//         console.log('update', result);
//         res.send({ result: true });
//     });
// };

module.exports = {
    main : main,
    signup,
    signin,
    post_signup,
    post_signin
}
