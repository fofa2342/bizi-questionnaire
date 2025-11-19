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
        console.error('Database connection failed:', err);
        throw err;
    }
    console.log('MySQL connected...');
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/views' });
});

app.post('/submit', (req, res) => {
    console.log('New submission received:');
    console.log(req.body);

    const data = req.body;

    // Ensure the price is a number or null
    if (data.q14_price_willing_to_pay === '' || data.q14_price_willing_to_pay === undefined) {
        data.q14_price_willing_to_pay = null;
    } else {
        data.q14_price_willing_to_pay = parseInt(data.q14_price_willing_to_pay, 10);
    }
    
    // Ensure boolean is handled correctly
    data.q12_whatsapp_usage = data.q12_whatsapp_usage === '1';


    const sql = 'INSERT INTO responses SET ?';
    db.query(sql, data, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Error saving response.');
        }
        console.log('Response saved successfully!');
        res.send('Response saved!');
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
