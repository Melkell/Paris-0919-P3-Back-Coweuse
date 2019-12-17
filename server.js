// Initializing express
const express = require('express')
const app = express()

// Default port
const port = process.env.PORT || 3030

// Require SqlConfig file
const connect = require('./sql')

// Setting up body-parser
const bodyParser = require('body-parser')
//// Use json encoded url
app.use(bodyParser.json())
//// Use encoded url
app.use(bodyParser.urlencoded({
    extended: true
}))

// Users route
const userRouter = require('./routes/user')
app.use('/users', userRouter)

// Tools route
const toolRouter = require('./routes/tools')
app.use('/tools', toolRouter)

// Missions route
const missionRouter = require('./routes/production')
app.use('/productions', missionRouter)

// Requests :

app.listen(port, (err) => {
    if (err) {
        throw new Error(`Sorry, an internal error has occurred.`)
    }
    else {
        console.log(`http://localhost:${port}`)
    }
})