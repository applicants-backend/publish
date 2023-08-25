const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection ({
    host:'127.0.0.1',   
    user:'minhyun',
    password:'aledma010@',
    database:'kdt9',
    port:3306,
})

const db_signup = (data,callback) => {
    const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
    conn.query(query, (error, rows) => {
        if(error) {
            console.log(error);
            return;
        }
        console.log('db_signup', rows);
        callback();
    });
}

const db_signin = (data,callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (error, rows) => {
        if(error) {
            console.log(error);
            return;
        }
        console.log('db_signin', rows);
        // select문의 쿼리문은 배열로 반환ㄴ
        callback(rows);
    });
}

module.exports = {
    db_signup,
    db_signin
};
