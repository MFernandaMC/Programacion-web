const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'UPVE'
});

function obtenerUsuarios(callback) {
    connection.connect()
    connection.query('SELECT * FROM `alumnos`', (err, rows, fields) => {
        if (err) {
            console.log(err);
            callback({err});
        } else {
            console.log(rows);
            callback({rows});
        }
    });
    connection.end();
};
exports.obtenerUsuarios = obtenerUsuarios;