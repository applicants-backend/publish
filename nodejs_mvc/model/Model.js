const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

// 임시 데이터
const comments = [
    {
        id : 1,
        userid : 'hello',
        date: '2023-08-05',
        comment: '안녕하세요'
    },
    {
        id : 2,
        userid : 'min',
        date: '2023-08-06',
        comment: '반가워요'
    },
    {
        id : 3,
        userid : 'hyun',
        date: '2023-08-07',
        comment: '사랑해요'
    },
    {
        id : 4,
        userid : 'key',
        date: '2023-08-10',
        comment: 'value'
    },
];

module.exports = comments;
