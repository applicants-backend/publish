const mysql = require('mysql')

const conn = mysql.createConnection ({
    host:'127.0.0.1',   
    user:'minhyun',
    password:'aledma010@',
    database:'KDT9-practice',
    port:3306,
})
conn.connect((err) => {
    if(err) {
        console.log(err)
        return;
    }
    console.log('connect')
})
