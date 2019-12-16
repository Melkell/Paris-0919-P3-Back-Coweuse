// Initialize express router
const express = require('express')
const router = express.Router()

// Import SQL
const connect = require('../sql')

// GET all users
router.get('/', (req, res) => {
    connect.query('SELECT * FROM utilisateur', (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.json(results)
        }
    })
})

// GET an user by ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    connect.query('SELECT * FROM utilisateur WHERE id=?', id, (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.json(results)
        }
    })
})

module.exports = router