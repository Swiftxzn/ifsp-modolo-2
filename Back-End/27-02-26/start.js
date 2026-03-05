const HttpServer = require("./httpServer");
const server = new HttpServer();
const PORT = 3000;
const ADDRESS = "127.0.0.1";
server.start(PORT, ADDRESS);