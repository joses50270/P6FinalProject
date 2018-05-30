var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var server = express()


server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false}))

server.set('view engine', 'ejs')
server.use(express.static('views'))
server.set('views', __dirname+'/views')

server.get('/', function(request, response){
    response.render('loading-page.ejs')
})
server.get('/start-conversation', function(request, response){
    response.render('start-convo.ejs')
})



var port = process.env.PORT

server.listen(port, () => {
    console.log('Server running on port' + port)
})
