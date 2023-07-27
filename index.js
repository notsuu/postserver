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
app.get('/post/:id', (req, res) => {
    //this is probably not required. maybe it is, we'll see
    //if (!req.params.id) { res.sendStatus(400); return }
    let filepath = __dirname+'/posts/'+req.params.id+'.json'
    if (!fs.existsSync(filepath) { res.sendStatus(404); return }
    res.sendFile(filepath)
})
app.listen(process.env.PORT || 3000)
