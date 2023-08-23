const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection ({
    host:'127.0.0.1',   
    user:'minhyun',
    password:'aledma010@',
    database:'kdt9',
    port:3306,
})

// 임시 데이터
const comments = [
    {
        id : 1,
        name : 'kim',
        gender: 'male',
        major: 'geology'
    },
    {
        id : 2,
        name : 'min',
        gender: 'male',
        major: 'physiology'
    },
    {
        id : 3,
        name : 'hyun',
        gender: 'female',
        major: 'chemical'
    },
    {
        id : 4,
        name : 'coding',
        gender: 'female',
        major: 'Astro'
    },
    {
        id : 5,
        name : 'on',
        gender: 'male',
        major: 'phsics'
    },
];
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
        callback();
    });
}

exports.post_signup = (data, callback) => {
    const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
    conn.query(query, (err, rows) => {
        console.log('post_signup', rows);
        callback();
    });
};

exports.post_signin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        console.log('post_signin', rows);
        callback(rows);
    });
};

exports.post_profile = (data,callback) => {
    const query = `SELECT * FROM user WHERE id='${data.id}' `;
    conn.query(query, (err, rows) => {
        console.log('post_profile', rows);
        callback(rows);
    });
};

module.exports = comments;
