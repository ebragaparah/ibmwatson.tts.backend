const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '172.19.0.2',
    user: 'abcd',
    password: 'abcd',
    database: 'commentsuniverse'
});

const createComments = `create table if not exists comments (
                                    id int primary key auto_increment,
                                    content varchar(255) not null
                             )`;

connection.query(createComments, (err, results, fields) => {
    if (err) {
	console.log(err.message);
    }
});

export { connection };
