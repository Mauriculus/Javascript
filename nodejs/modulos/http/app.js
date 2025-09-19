import http from 'http'

http.createServer(function (req, res) { //cria um servidor
  res.writeHead(200, {'Content-Type': 'text/plain'}); //escreve algo no servidor
  res.end('Hello World!'); // escreve hello world
}).listen(8080); //mostra o host 8080
console.log('servidor funfando')