const express = require('express')
const app = express()
const server = require('http').createServer(app)
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session(require('./config/session')))

app.use((req, res, next) => {
  return next()
})

app.use('/api', require('./src/server/routes'))

app.use('/', express.static(path.resolve(__dirname, 'dist')))

app.get('*', (req, res) => {
  return res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

server.listen(port)
