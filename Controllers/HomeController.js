const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connect Successfully");

        connection.query("SELECT * FROM student", (err, rows) => {
            connection.release();

            if (err) throw err;
            else res.render("home", { rows });
        });
    });
};

exports.login = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connect Successfully");

        res.render('login')
    });
};

exports.authen = (req, res) => {

    const user = req.body.email,
        password = req.body.password

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connect Successfully");



        if (password === "1") res.render('home')
        else res.render('login')
    });
};