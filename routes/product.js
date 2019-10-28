const express = require('express');
const router = express.Router();

const mysqlConnection = require('../src/data/database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM PRODUCTS', (err, rows, fields) => {
        err ? console.log(err) : res.json(rows);
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM PRODUCTS WHERE ID = ?', [id], (err, rows, fields) => {
        err ? console.log(err) : res.json(rows);
    });
});

router.post('/', (req, res) => {
    const { name, description, price, stock } = req.body;
    mysqlConnection.query('INSERT INTO PRODUCTS (NAME, DESCRIPTION, PRICE, STOCK) VALUES (?,?,?,?)',
        [name, description, price, stock], (err, rows, fields) => {
            err ? console.log(err) : res.json({ status: 'Product Saved' });
        })
});

router.put('/:id', (req, res) => {
    const { name, description, price, stock } = req.body;
    const { id } = req.params;
    mysqlConnection.query('UPDATE PRODUCTS SET NAME = ?, DESCRIPTION = ?,PRICE = ?, STOCK = ? WHERE ID = ?',
        [name, description, price, stock, id], (err, rows, fields) => {
            err ? console.log(err) : res.json({ status: 'Product Updated' });
        })
});

router.delete('/:id', (req, res) => {
	const {id} = req.params;
	mysqlConnection.query('DELETE FROM products WHERE id = ?', [id], (err, rows, fields) => {
		err ? console.log(err) : res.json({status: 'Product Deleted'});
	})
});
module.exports = router;
