const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
app.use(cors({origin: '*'}))
app.get('/', (req, res) => {
    res.redirect(301, 'https://notsuu.github.io')
})
app.get('/posts', (req, res) => {
    res.sendFile(__dirname+'/posts.json')
})
app.get('/post', (req, res) => {
    if (!req.query.id) { res.sendStatus(400); return }
    if (!fs.existsSync(__dirname+'/posts/'+req.query.id+'.json')) { res.sendStatus(404); return }
    res.sendFile(__dirname+'/posts/'+req.query.id+'.json')
})
app.listen(process.env.PORT || 3000)
