const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Add your MySQL password here
  database: 'blood_bank'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// API Endpoints

// 1. Donor Management
// Get all donors
app.get('/donors', (req, res) => {
  let sql = 'SELECT * FROM donors';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Add a new donor
app.post('/donors', (req, res) => {
  let data = req.body;
  let sql = 'INSERT INTO donors SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send('Donor added...');
  });
});

// Update a donor
app.put('/donors/:id', (req, res) => {
  let sql = `UPDATE donors SET ? WHERE donor_id = ${req.params.id}`;
  db.query(sql, req.body, (err, result) => {
    if (err) throw err;
    res.send('Donor updated...');
  });
});

// Delete a donor
app.delete('/donors/:id', (req, res) => {
  let sql = `DELETE FROM donors WHERE donor_id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Donor deleted...');
  });
});

// 2. Blood Inventory Management
// Get blood inventory
app.get('/inventory', (req, res) => {
  let sql = 'SELECT * FROM inventory';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Add or update blood inventory
app.post('/inventory', (req, res) => {
  let data = req.body;
  let sql = 'INSERT INTO inventory SET ? ON DUPLICATE KEY UPDATE units_available = units_available + ?';
  db.query(sql, [data, data.units_available], (err, result) => {
    if (err) throw err;
    res.send('Inventory updated...');
  });
});

// 3. Request Management
// Get all requests
app.get('/requests', (req, res) => {
  let sql = 'SELECT * FROM requests';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Add a new request
app.post('/requests', (req, res) => {
  let data = req.body;
  let sql = 'INSERT INTO requests SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send('Request added...');
  });
});

// Update request status
app.put('/requests/:id', (req, res) => {
  let sql = `UPDATE requests SET status = ? WHERE request_id = ${req.params.id}`;
  db.query(sql, req.body.status, (err, result) => {
    if (err) throw err;
    res.send('Request status updated...');
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});