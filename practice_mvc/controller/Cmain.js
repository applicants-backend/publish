const model = require('../model/Model');
const {User} = require('../models');

// 메인페이지
const main = (req,res) => {
    res.render('index');
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
    model.db_singin(req.body, () => {
        if (result.length >0) {
            res,json({result : true, data :result.length });
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
    signin
}
