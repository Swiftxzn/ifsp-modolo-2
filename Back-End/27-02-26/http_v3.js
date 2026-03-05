const server = Http2ServerRequest.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Sobre nós ') ;
} else {
    res.writeHead(404, {'content-type': 'text/plain'});
    res.end('Página não encontrada');
}
});

const PORT = 3000;
const ADDRESS = '127.0.0.1';

server.listen(PORT, ADDRESS, () => {
    console.log(`Servidor rodando em http://${ADDRESS}:${PORT}`);
});