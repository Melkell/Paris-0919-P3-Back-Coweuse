// Initialize express router
const express = require('express')
const router = express.Router()

// Import SQL
const connect = require('../sql')

// Get all tools
router.get('/', (req, res) => {
    connect.query('SELECT equipement.id, equipement.name, exploitation.name as exploitation_name, sous_type.name as sous_type_name FROM equipement INNER JOIN exploitation ON exploitation.id=exploitation_id INNER JOIN sous_type ON sous_type.id=sous_type_id;', (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.json(results)
        }
    })
})

// Get a tool by ID
router.get('/:id', (req, res) => {
    connect.query('SELECT equipement.id, equipement.name, exploitation.name as exploitation_name, sous_type.name as sous_type_name FROM equipement INNER JOIN exploitation ON exploitation.id=exploitation_id INNER JOIN sous_type ON sous_type.id=sous_type_id WHERE equipement.id=?', id, (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.json(results)
        }
    })
})

router.post('/add', (req, res) => {
    const userData = req.body
    connect.query('INSERT INTO equipement SET ?', userData, (err) => {
        if (err) {
            res.status(500).send('Sorry, a problem has occurred while adding this user.')
        }
        else {
            res.status(200).send('Tool successfully added.')
        }
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    connect.query('DELETE FROM equipement WHERE equipement.id=?', id, (err) => {
        if (err) {
            res.status(500).send('Sorry, a problem has occurred while removing this user.')
        }
        else {
            res.status(200).send('Tool successfully removed.')
        }
    })
})



module.exports = router