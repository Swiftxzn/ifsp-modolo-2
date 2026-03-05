const http = require("http");
const { start } = require("repl");

// Class -> Modelo / Receita para um objeto
// CRUD -> Create, Read, Update, Delete

class HttpServer {
  constructor() {
    this.routes = {}; // Catálogo de rotas
  }

  onRequest(resquest, response) {
    const { method, url } = resquest;

    if (this.routes[url] && this.routes[url][method]) {
      this.routes[url][method](resquest, response);
    } else {
      this.sendResponse(response, "Not Found");
    }
  }
  sendResponse(response, statusCode, body) {
    response.writeHead(statusCode, { "Content-Type": "application/json" });
    response.end(body);
  }

  start(port, address) {
    const server = http.createServer(this.onRequest.bind(this));
    server.listen(port, address, () => {
      console.log(`Servidor executando em http://${address}:${port}`);
    });
  }
}

module.exports = HttpServer;