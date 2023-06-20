const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Mate')
})

app.listen(port, () => {
    console.log(`App is now running on port ${port} `)
})