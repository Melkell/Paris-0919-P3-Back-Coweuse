const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Outcool',
    multipleStatements: true
})

module.exports = connect
