import http from 'http';


const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Página inicial');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Sobre nós');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
