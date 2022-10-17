// Connect To Database...
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

module.exports = db;