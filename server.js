/** IMport des modules */
const express = require('express')
const cors = require('cors')

/** Params API */
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

/** ROUTAGE */

app.get('/', (req, res) => res.send(`Well done !!!!!!! - AND ANOTHER - For JOKE - switch - 1.0.0`))

app.post('/auth/login', (req, res) => res.json({message: 'test login'}))

app.all('*', (req, res) => res.status(501).send('What the hell are you doing'))

/** START API */
const server = app.listen(process.env.SERVER_PORT, () => {
    console.log(`This API is running on port ${process.env.SERVER_PORT}`)
})

module.exports = server
