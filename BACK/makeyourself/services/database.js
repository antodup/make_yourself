/*============================================================
#title            : Database exercice node
#description      : Script for database
#author           : DUPRE ANTHONY
#date             : 2018/XX/XX
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'mysql-makeyourself.alwaysdata.net',
    port: '3306',
    user: '161956',
    password: 'root',
    database: 'makeyourself_bdd'
})

connection.connect(function (err) {
    if(err) throw err;
    console.log('connected')
})
function sendQuery(query, callback) {
    connection.query(query, function (error, results, fields) {
        if (error) {
            callback(error)
        } else {
            callback(null, results);
        }
    })

}
module.exports = ({
    sendQuery: sendQuery
})
