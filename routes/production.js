// Initialize express router
const express = require('express')
const router = express.Router()

// Import SQL
const connect = require('../sql')

// GET all productions
router.get('/', (req, res) => {
    connect.query(`SELECT * FROM production`, (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.json(results)
        }
    })
})

// GET all mission
router.get('/missions', (req, res) => {
    connect.query(`SELECT mission.name, mission.start_date, mission.end_date, itineraire.name as itineraire_name, utilisateur.first_name as utilisateur_first_name, utilisateur.last_name as utilisateur_last_name FROM mission
    INNER JOIN itineraire ON itineraire.id=mission.itineraire_id
    LEFT JOIN utilisateur ON utilisateur.id=mission.user_id`, (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.json(results)
        }
    })
})

// GET a mission
router.get('/missions/:id', (req, res) => {
    const id = req.params.id
    connect.query(`SELECT mission.name, mission.start_date, mission.end_date, itineraire.name as itineraire_name, utilisateur.first_name as utilisateur_first_name, utilisateur.last_name as utilisateur_last_name FROM mission
    INNER JOIN itineraire ON itineraire.id=mission.itineraire_id
    LEFT JOIN utilisateur ON utilisateur.id=mission.user_id
    WHERE mission.id=?`, id, (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.json(results)
        }
    })
})

// POST a mission
router.post('/missions/add', (req, res) => {
    const data = req.body
    connect.query('INSERT INTO mission SET ?', data, (err, results) => {
        if (err) {
            res.status(500).send('A problem has occurred while adding the mission')
        }
        else {
            res.json(results)
        }
    })
})

module.exports = router