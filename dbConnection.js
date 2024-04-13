const mysql = require('mysql');

let dbConnection;

function handleDisconnect() {
    dbConnection = mysql.createConnection({
        host: 'sql6.freemysqlhosting.net',
        user: 'sql6698319',
        password: 'aNKmnUVDuW',
        database: 'sql6698319',
        reconnect: true 
    });

    dbConnection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            setTimeout(handleDisconnect, 2000); 
        } else {
            console.log('Connected to MySQL database!');
        }
    });

    dbConnection.on('error', (err) => {
        console.error('MySQL connection error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect(); 
        } else {
            throw err;
        }
    });
}

handleDisconnect(); 

module.exports = dbConnection;
