// Modules and Globals
require('dotenv').config
const express = require('express')
const app = express()

//Express Settings
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`We're running on ${process.env.PORT}`)
})