// Initialize express router
const express = require('express')
const router = express.Router()

// Import SQL
const connect = require('../sql')

// GET all users
router.get('/', (req, res) => {
    connect.query(`SELECT utilisateur.id, utilisateur.first_name, utilisateur.last_name, utilisateur.email, utilisateur.active, role.name as role_name, exploitation.name as exploitation_name FROM utilisateur
    INNER JOIN role ON role_id=role.id
    INNER JOIN exploitation ON id_exploitation=exploitation.id;`, (err, results) => {
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
    connect.query(`SELECT utilisateur.id, utilisateur.first_name, utilisateur.last_name, utilisateur.email, utilisateur.active, role.name as role_name, exploitation.name as exploitation_name FROM utilisateur
    INNER JOIN role ON role_id=role.id
    INNER JOIN exploitation ON id_exploitation=exploitation.id
    WHERE utilisateur.id=?`, id, (err, results) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        }
        else {
            res.json(results)
        }
    })
})

// GET an user's mission
router.get('/:id/mission', (req, res) => {
    const id = req.params.id
    // We try to get user's regular informations, but also mission's ones, so equipment's ones, task's ones, etc
    connect.query(`SELECT utilisateur.id, utilisateur.first_name, utilisateur.last_name, mission.name as mission_name, mission.start_date, mission.end_date, mission.validation, itineraire.name as itineraire_name, tache.name as tache_name FROM utilisateur
    LEFT JOIN mission ON utilisateur.id=mission.user_id
    LEFT JOIN itineraire ON mission.itineraire_id=itineraire.id
    LEFT JOIN tache ON mission.tache_id=tache.id
    WHERE utilisateur.id=?;
    SELECT mission.name as mission_name, equipement.name as equipement_name FROM mission_equipement
    INNER JOIN mission ON mission_equipement.id_mission=mission.id
    INNER JOIN equipement ON mission_equipement.id_equipement=equipement.id`, id, (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.json(results)
        }
    })
})

// POST an user
router.post('/add', (req, res) => {
    const userData = req.body
    connect.query('INSERT INTO utilisateur SET ?', userData, (err) => {
        if (err) {
            res.status(500).send('Sorry, a problem has occurred while adding this user.')
        }
        else {
            res.status(200).send('User successfully added.')
        }
    })
})

// DELETE an user
router.delete('/:id', (req, res) => {
    const id = req.params.id
    connect.query('DELETE FROM utilisateur WHERE id=?', id, (err) => {
        if (err) {
            res.status(500).send('Sorry, a problem has occurred while removing this user.')
        }
        else {
            res.status(200).send('User successfully removed.')
        }
    })
})

module.exports = router