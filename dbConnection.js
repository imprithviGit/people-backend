const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6698319',
    password: 'aNKmnUVDuW',
    database: 'sql6698319'
});

dbConnection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

module.exports = dbConnection;
