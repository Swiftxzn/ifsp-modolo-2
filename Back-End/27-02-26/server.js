const http = require('http');

// Arrow Function
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Olá, Servidor HTTP') ;

});