require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) {
        throw err;
    }
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/views' });
});

app.post('/submit', (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO responses SET ?';
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send('Response saved!');
    });
});

app.listen(port);
