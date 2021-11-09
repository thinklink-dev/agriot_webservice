const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Th1nkL1nk@2021',
    database: 'agriot',
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('AGRIOT WebService successfully conected!');
    }
});

module.exports = mysqlConnection;