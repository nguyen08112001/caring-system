const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

exports.select = (req, res) => {



    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connect Successfully");

        connection.query("SELECT * FROM STUDENT", (err, rows) => {
            connection.release();

            if (err) throw err;
            else res.render("STUDENT", { rows });
        });
    });
};

// NOT CONFIG UPDATE

exports.update = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connect Successfully");

        connection.query("SELECT * FROM STUDENT WHERE ID = ?", [req.params.id], (err, rows) => {
            connection.release();

            if (err) throw err;
            else res.render("STUDENT-form", { rows });
        });
    });
};