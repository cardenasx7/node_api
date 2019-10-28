const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_movil'
});

mysqlConnection.connect((err) => {
    err ? console.log(err) : console.log('DB is connected');
});

module.exports = mysqlConnection;
