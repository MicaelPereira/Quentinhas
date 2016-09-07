var mysql = require('mysql');

function createDBConnection(){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password:'',
            database:'Quentinhas'
        });
}
//wrapper
module.exports = function(){
    return createDBConnection;
}