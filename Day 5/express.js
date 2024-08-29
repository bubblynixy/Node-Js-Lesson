let express = require('express')

let server = express() //For instantiating the express server

server.get('/home',function(request,response){
    response.send('Hi,I am Princess') //in express, 'response.send' is used
})

server.get('/about',function(request,response){
    response.send('Welcome to the About Page')
})

server.get('/contact',function(requset,response){
    response.send('<h1>Contact me Here</h1>') //To send the message in a html format
})

server.listen(8088,function(){
    console.log("I am here")
})
