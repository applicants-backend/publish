const model = require('../model/Model');

exports.main = (req, res) => {
    res.render('index', {users:model});
};

exports.register = (req, res) => {
    const {name, gender, major} = req.body;
    model.push({
        id : model.length +1,
        name,
        gender,
        major
    });
    res.send(model);
};

// const comment = (req, res) => {
//     console.log(req.params);
//     //{name:'50'}  :name 콜론뒤에붙은 변수가 key, 입력한 값이 value
//     res.render('comment', { data: model[Number(req.params.name) - 1] });
// };

// module.exports = {
//     main: main,
//     comm: comments,
//     comment,
// };
