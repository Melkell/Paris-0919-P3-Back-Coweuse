const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'Outcool',
    multipleStatements: true
})

module.exports = connect