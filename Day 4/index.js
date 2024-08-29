const http = require('http')

const myServer = http.createServer(
    function(request,response) {
        response.write("Hello from Server")
        response.end()
    }
    )
myServer.listen(8080, function(){
    console.log('My server is running.');
})


        