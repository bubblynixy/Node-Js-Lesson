let http = require('http')

let server = http.createServer(function(request,response){
    response.write("Hello  from Earth ")
    response.end()
}) 
server.listen(8088,function(){
    console.log("Yello")
})
