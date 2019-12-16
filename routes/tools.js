// Initialize express router
const express = require('express')
const router = express.Router()

// Import SQL
const connect = require('../sql')

// Get all tools
router.get('/', (req, res) => {
    res.status(200).send('Tools list')
})

// Get a tool by ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).send(`Tool n°${id}`)
})

module.exports = router