let http = require ('http')

let server = http.createServer(function(request,response) {
    let body = "Hello";
    response.writeHead(200,{
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
    });
    response.end(body);
});
server.listen(3000);


