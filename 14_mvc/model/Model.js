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
const users = [
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

module.exports = comments;
