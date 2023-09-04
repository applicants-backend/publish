import mysql from "mysql";
import pwd from "../pwd/index.js";

const db = mysql.createConnection({
  host:'127.0.0.1',   
    user:'minhyun',
    password:'aledma010@',
    database:'kdt9',
    port:3306,
});

export default db;